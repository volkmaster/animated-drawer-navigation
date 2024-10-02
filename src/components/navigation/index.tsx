import React, { FC } from "react"

import { useNavigation, ColumnType } from "../../contexts/navigation"

import { Wrapper, Column, Element } from "./styles"

interface Props {
  className?: string
}

const Navigation: FC<Props> = ({ className }: Props) => {
  const { columns, getColumnState, navigateForwards, navigateBackwards, onFirstColumnClick } =
    useNavigation()

  return (
    columns && (
      <Wrapper className={className}>
        {Object.values(columns).map((column: ColumnType, index: number) => (
          <Column key={`column-${index}`} $state={getColumnState(index)} $index={index}>
            {(column.states.hideNarrow || column.states.widenNarrow) && (
              <Element
                $narrow
                $state={getColumnState(index)}
                $index={index}
                {...{
                  onClick: index > 0 ? () => navigateBackwards(index) : onFirstColumnClick,
                }}
              >
                {columns[index].label}
              </Element>
            )}
            {(column.states.hideWiden || column.states.narrowWiden) &&
              columns[index - 1].children.map((node) => (
                <Element
                  key={node.id}
                  $wide
                  $state={getColumnState(index)}
                  $index={index}
                  $active={node.id === columns[index].id}
                  onClick={() => navigateForwards(node, index)}
                >
                  {node.label}
                </Element>
              ))}
          </Column>
        ))}
      </Wrapper>
    )
  )
}

export default Navigation
