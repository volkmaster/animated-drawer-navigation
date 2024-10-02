import { useState, useEffect, useCallback, useRef } from "react"
import pickBy from "lodash.pickby"

import { ANIMATION_TIME_FACTOR } from "../../constants"
import { NavigationType, IdToNodeMapType, PathToLeafMapType } from "."

const TIME_COLUMN_STATE_CHANGE = 0.2 * ANIMATION_TIME_FACTOR

interface ColumnStatesType {
  hideWiden?: boolean
  widenHide?: boolean
  hideNarrow?: boolean
  narrowHide?: boolean
  widenNarrow?: boolean
  narrowWiden?: boolean
}

export interface ColumnType {
  id: string
  label: string
  children: NavigationType[]
  states: ColumnStatesType
}

interface Props {
  navigation: NavigationType | null
  incrementStatistics: (id: string) => void
  idToNodeMap: IdToNodeMapType
  pathToLeafMap: PathToLeafMapType
  setSelected: (id: string | null) => void
}

const useColumns = ({
  navigation,
  incrementStatistics,
  idToNodeMap,
  pathToLeafMap,
  setSelected,
}: Props) => {
  const [columns, setColumns] = useState<{ [key: number]: ColumnType }>({})
  const [numColumns, setNumColumns] = useState<number>(0)
  const maxColumns: number = 5 // TODO: calculate
  const [leaf, setLeaf] = useState<string | null>(null)

  const getColumnState = useCallback(
    (index: number): string => {
      return Object.keys(pickBy(columns[index].states))[0]
    },
    [columns],
  )

  const changeColumnStates = (index: number, newStates: ColumnStatesType) => {
    setColumns((prev) => ({
      ...prev,
      [index]: { ...prev[index], states: { ...prev[index].states, ...newStates } },
    }))
  }

  const fromHiddenToWide = useCallback((index: number) => {
    changeColumnStates(index, { hideWiden: true })
  }, [])

  const fromWideToHidden = useCallback((index: number) => {
    changeColumnStates(index, { hideWiden: false, narrowWiden: false, widenHide: true })
    setTimeout(() => {
      changeColumnStates(index, { widenHide: false })
    }, TIME_COLUMN_STATE_CHANGE * 1000)
  }, [])

  const fromHiddenToNarrow = useCallback((index: number) => {
    changeColumnStates(index, { hideNarrow: true })
  }, [])

  const fromNarrowToHidden = useCallback((index: number) => {
    changeColumnStates(index, { widenNarrow: false, hideNarrow: false, narrowHide: true })
    setTimeout(() => {
      changeColumnStates(index, { narrowHide: false })
    }, TIME_COLUMN_STATE_CHANGE * 1000)
  }, [])

  const fromWideToNarrow = useCallback((index: number) => {
    changeColumnStates(index, { hideWiden: false, narrowWiden: false, widenNarrow: true })
  }, [])

  const fromNarrowToWide = useCallback((index: number) => {
    changeColumnStates(index, { narrowWiden: true, widenHide: false, widenNarrow: false })
  }, [])

  const navigateForwards = useCallback(
    (node: NavigationType, index: number) => {
      const { id, children } = node

      setColumns((prev) => ({
        ...prev,
        [index]: { ...prev[index], ...node },
      }))

      if (children.length > 0) {
        if (index >= 2) {
          // previous: narrow <- wide
          fromWideToNarrow(index - 1)
        }

        // next: hidden -> wide
        fromHiddenToWide(index + 1)

        setNumColumns(index + 2)
      } else {
        // current and all before: hidden <- narrow/wide
        for (let i = Math.min(index + 1, maxColumns - 1); i >= 1; i--) {
          if (columns[i].states.hideNarrow || columns[i].states.widenNarrow) {
            fromNarrowToHidden(i)
          } else if (columns[i].states.hideWiden || columns[i].states.narrowWiden) {
            fromWideToHidden(i)
          }
        }

        // first (navigation) column: hidden -> narrow
        fromHiddenToNarrow(0)

        setNumColumns(index + 1)

        incrementStatistics(id)

        // TODO: maybe send callback like onLeafClick
        setSelected(id)
      }
    },
    [
      columns,
      fromHiddenToNarrow,
      fromHiddenToWide,
      fromNarrowToHidden,
      fromWideToHidden,
      fromWideToNarrow,
      incrementStatistics,
      setSelected,
    ],
  )

  const navigateBackwards = useCallback(
    (index: number) => {
      // current and all after: hidden <- narrow/wide
      for (let i = numColumns - 1; i >= index; i--) {
        if (columns[i].states.hideNarrow || columns[i].states.widenNarrow) {
          fromNarrowToHidden(i)
        } else if (columns[i].states.hideWiden || columns[i].states.narrowWiden) {
          fromWideToHidden(i)
        }
      }

      setTimeout(() => {
        // clear content of all columns that come after the current one
        for (let i = numColumns - 1; i > index; i--) {
          setColumns((prev) => ({
            ...prev,
            [i]: { ...prev[i], id: "", label: "", children: [] },
          }))
        }

        // current: narrow -> wide
        fromNarrowToWide(index)

        // next: hide -> wide
        fromHiddenToWide(index + 1)

        setNumColumns(index + 2)
      }, TIME_COLUMN_STATE_CHANGE * 1000)
    },
    [columns, fromHiddenToWide, fromNarrowToHidden, fromNarrowToWide, fromWideToHidden, numColumns],
  )

  const resetColumns = useCallback(() => {
    if (navigation) {
      setColumns(
        [...Array(maxColumns)].reduce(
          (acc, _, i) =>
            Object.assign(acc, {
              [i]: {
                id: "",
                label: i === 0 ? navigation.label : "",
                children: i === 0 ? navigation.children : [],
                states: {
                  hideWiden: false,
                  widenHide: false,
                  hideNarrow: false,
                  narrowHide: i === 0 && !leaf,
                  widenNarrow: false,
                  narrowWiden: false,
                },
              },
            }),
          {},
        ),
      )
    }
  }, [navigation, leaf])

  const areColumnsSet = useRef<boolean>(false)
  useEffect(() => {
    if (!areColumnsSet.current && navigation) {
      resetColumns()
      areColumnsSet.current = true
    }
  }, [navigation, leaf, resetColumns])

  const expandNavigation = useCallback(() => {
    // first (navigation) column: hidden <- narrow
    fromNarrowToHidden(0)

    // second column: wide <- hidden
    fromHiddenToWide(1)

    setNumColumns(2)
  }, [fromNarrowToHidden, fromHiddenToWide])

  const hasNavigationBeenExpanded = useRef(false)
  useEffect(() => {
    if (!hasNavigationBeenExpanded.current && columns && !leaf) {
      expandNavigation()
      hasNavigationBeenExpanded.current = true
    }
  }, [columns, leaf, expandNavigation])

  const applyPathFromLeaf = useCallback(
    (leaf: string) => {
      const path = pathToLeafMap[leaf]

      setColumns((prev) => ({
        ...prev,
        ...path.reduce(
          (acc, id, i) =>
            Object.assign(acc, {
              [i + 1]: { ...prev[i + 1], ...idToNodeMap[id] },
            }),
          {},
        ),
      }))

      // first (navigation) column: narrow <- hidden
      fromHiddenToNarrow(0)

      setNumColumns(path.length + 1)
    },
    [idToNodeMap, pathToLeafMap, fromHiddenToNarrow],
  )

  const hasPathBeenAppliedFromLeaf = useRef(false)
  useEffect(() => {
    if (
      !hasPathBeenAppliedFromLeaf.current &&
      Object.keys(columns).length > 0 &&
      leaf &&
      Object.keys(pathToLeafMap).length > 0
    ) {
      applyPathFromLeaf(leaf)
      hasPathBeenAppliedFromLeaf.current = true
    }
  }, [columns, leaf, pathToLeafMap, applyPathFromLeaf])

  const hideAllColumns = useCallback(() => {
    // all columns: hidden <- narrow/wide
    for (let i = maxColumns - 1; i >= 1; i--) {
      if (columns[i].states.hideNarrow || columns[i].states.widenNarrow) {
        fromNarrowToHidden(i)
      } else if (columns[i].states.hideWiden || columns[i].states.narrowWiden) {
        fromWideToHidden(i)
      }
    }
  }, [columns, fromNarrowToHidden, fromWideToHidden])

  const onFirstColumnClick = useCallback(() => {
    // first (navigation) column: hidden <- narrow
    fromNarrowToHidden(0)

    // all but the last two columns: hidden -> narrow
    for (let i = 1; i < numColumns - 2; i++) {
      fromHiddenToNarrow(i)
    }

    // last two columns: hidden -> wide
    for (let i = Math.max(numColumns - 2, 1); i < numColumns; i++) {
      fromHiddenToWide(i)
    }
  }, [fromNarrowToHidden, fromHiddenToNarrow, fromHiddenToWide, numColumns])

  return {
    columns,
    getColumnState,
    navigateForwards,
    navigateBackwards,
    onFirstColumnClick,
    resetColumns,
    expandNavigation,
    hideAllColumns,
    applyPathFromLeaf,
    leaf,
    setLeaf,
  }
}

export default useColumns
