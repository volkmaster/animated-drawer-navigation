import React, { createContext, useContext, useState, useMemo, useEffect, useCallback } from "react"

import useColumns, { ColumnType } from "./useColumns"
import useLocalStorage from "../../hooks/useLocalStorage"

export { ColumnType } from "./useColumns"

export interface NavigationType {
  id: string
  label: string
  children: NavigationType[]
}

export interface StatisticsType {
  [key: string]: number
}

export interface IdToNodeMapType {
  [key: string]: NavigationType
}

export interface IdToParentMapType {
  [key: string]: string | null
}

export interface PathToLeafMapType {
  [key: string]: string[]
}

interface NavigationContextType {
  navigation: NavigationType | null
  statistics: StatisticsType
  incrementStatistics: (id: string) => void
  clearStatistics: () => void
  idToNodeMap: IdToNodeMapType
  idToParentMap: IdToParentMapType
  pathToLeafMap: PathToLeafMapType
  columns: { [key: number]: ColumnType }
  getColumnState: (index: number) => string
  navigateForwards: (node: NavigationType, index: number) => void
  navigateBackwards: (index: number) => void
  onFirstColumnClick: () => void
  resetColumns: () => void
  expandNavigation: (id: string) => void
  hideAllColumns: () => void
  applyPathFromLeaf: (id: string) => void
  leaf: string | null
  setLeaf: (id: string) => void
  selected: string | null
  setSelected: (id: string | null) => void
}

const NavigationContext = createContext<NavigationContextType>({
  navigation: null,
  statistics: {},
  incrementStatistics: () => {},
  clearStatistics: () => {},
  idToNodeMap: {},
  idToParentMap: {},
  pathToLeafMap: {},
  columns: {},
  getColumnState: () => "",
  navigateForwards: () => {},
  navigateBackwards: () => {},
  onFirstColumnClick: () => {},
  resetColumns: () => {},
  expandNavigation: () => {},
  hideAllColumns: () => {},
  applyPathFromLeaf: () => {},
  leaf: null,
  setLeaf: () => {},
  selected: null,
  setSelected: () => {},
})

interface Props {
  navigation: NavigationType | null
  children: React.ReactNode
}

const NavigationProvider = ({ navigation, children }: Props) => {
  const storage = useLocalStorage()

  const [statistics, setStatistics] = useState<StatisticsType>({})
  const [idToNodeMap, setIdToNodeMap] = useState<IdToNodeMapType>({})
  const [idToParentMap, setIdToParentMap] = useState<IdToParentMapType>({})
  const [pathToLeafMap, setPathToLeafMap] = useState<PathToLeafMapType>({})
  const [selected, setSelected] = useState<string | null>(null)

  const buildNavigationMaps = useCallback((parent: string | null, node: NavigationType) => {
    const { id, children } = node

    if (id) {
      setIdToNodeMap((prev) => ({ ...prev, [id]: node }))
      setIdToParentMap((prev) => ({ ...prev, [id]: parent }))
    }

    for (const child of children) {
      buildNavigationMaps(id, child)
    }
  }, [])

  useEffect(() => {
    if (navigation) {
      buildNavigationMaps(null, navigation)
    }
  }, [navigation, buildNavigationMaps])

  useEffect(() => {
    if (Object.keys(idToParentMap).length > 0) {
      for (const id in idToParentMap) {
        const path: string[] = []
        let parent: string | null = id
        while (parent !== null) {
          path.push(parent)
          parent = idToParentMap[parent]
        }
        setPathToLeafMap((prev) => ({ ...prev, [id]: path.reverse() }))
      }
    }
  }, [idToParentMap])

  const updateStatistics = useCallback((navigation: NavigationType, statistics: StatisticsType) => {
    const id = navigation.id
    const children = navigation.children

    if (id && !(id in statistics) && children.length === 0) {
      statistics[id] = 0
    }

    for (const child of children) {
      updateStatistics(child, statistics)
    }
  }, [])

  useEffect(() => {
    if (navigation) {
      const statistics: StatisticsType = storage.get("navigationStatistics") || {}
      updateStatistics(navigation, statistics)
      storage.set("navigationStatistics", statistics)
      setStatistics(statistics)
    }
  }, [navigation, updateStatistics, storage])

  const incrementStatistics = useCallback(
    (id: string) => {
      const newValue = statistics[id] + 1
      setStatistics((prev) => ({ ...prev, [id]: newValue }))
      storage.setToObject("navigationStatistics", id, newValue)
    },
    [statistics, storage],
  )

  const clearStatistics = useCallback(() => {
    storage.remove("navigationStatistics")
  }, [storage])

  const {
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
  } = useColumns({
    navigation,
    incrementStatistics,
    idToNodeMap,
    pathToLeafMap,
    setSelected,
  })

  const value = useMemo<NavigationContextType>(
    () => ({
      navigation,
      statistics,
      incrementStatistics,
      clearStatistics,
      idToNodeMap,
      idToParentMap,
      pathToLeafMap,
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
      selected,
      setSelected,
    }),
    [
      navigation,
      statistics,
      incrementStatistics,
      clearStatistics,
      idToNodeMap,
      idToParentMap,
      pathToLeafMap,
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
      selected,
      setSelected,
    ],
  )

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
}

const NavigationConsumer = NavigationContext.Consumer

const useNavigation = () => {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error(`useNavigation must be used within a NavigationProvider`)
  }
  return context
}

export { NavigationProvider, NavigationConsumer, useNavigation }
