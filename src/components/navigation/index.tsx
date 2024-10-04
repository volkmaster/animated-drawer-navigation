import React, { FC } from "react"
import { useNavigation, ColumnType } from "../../contexts/navigation"
import { Wrapper, Column, Element } from "./styles"

interface Props {
  className?: string
  backgroundColorPalette: string[]
  fontColorPalette: string[]
  font: string
  animationSpeedMultiplier: number
}

const Navigation: FC<Props> = ({
  className,
  backgroundColorPalette,
  fontColorPalette,
  font,
  animationSpeedMultiplier,
}: Props) => {
  const { columns, getColumnState, navigateForwards, navigateBackwards, onFirstColumnClick } =
    useNavigation()

  return Object.keys(columns).length > 0 ? (
    <Wrapper className={className}>
      {Object.values(columns).map((column: ColumnType, index: number) => (
        <Column
          key={`column-${index}`}
          $state={getColumnState(index)}
          $index={index}
          $backgroundColorPalette={backgroundColorPalette}
          $animationSpeedMultiplier={animationSpeedMultiplier}
        >
          {(column.states.hideNarrow || column.states.widenNarrow) && (
            <Element
              $narrow
              $state={getColumnState(index)}
              $index={index}
              $backgroundColorPalette={backgroundColorPalette}
              $fontColorPalette={fontColorPalette}
              $font={font}
              $animationSpeedMultiplier={animationSpeedMultiplier}
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
                $backgroundColorPalette={backgroundColorPalette}
                $fontColorPalette={fontColorPalette}
                $font={font}
                $animationSpeedMultiplier={animationSpeedMultiplier}
                onClick={() => navigateForwards(node, index)}
              >
                {node.label}
              </Element>
            ))}
        </Column>
      ))}
    </Wrapper>
  ) : null
}

export default Navigation
