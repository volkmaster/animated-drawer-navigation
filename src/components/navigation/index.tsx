import React, { FC } from "react"
import { ThemeProvider } from "styled-components"
import { useNavigation, ColumnType } from "../../contexts/navigation"
import theme from "../../theme"
import { Wrapper, Column, Element } from "./styles"

interface Props {
  className?: string
  backgroundColorPalette?: string[]
  fontColorPalette?: string[]
  fontFamily?: string
  fontSize?: string
}

const Navigation: FC<Props> = ({
  className,
  backgroundColorPalette = [
    theme.colors.darkBlueGray,
    theme.colors.bluishGray,
    theme.colors.ashGray,
    theme.colors.quillGray,
    theme.colors.doubleSpanishWhite,
    theme.colors.softPeach,
    theme.colors.warmSand,
    theme.colors.lightOlive,
    theme.colors.mistBlue,
    theme.colors.slateGreen,
    theme.colors.paleSilver,
    theme.colors.duskGray,
  ],
  fontColorPalette = [
    theme.colors.quillGray,
    theme.colors.quillGray,
    theme.colors.darkBlueGray,
    theme.colors.darkBlueGray,
    theme.colors.darkBlueGray,
    theme.colors.darkBlueGray,
    theme.colors.darkBlueGray,
    theme.colors.darkBlueGray,
    theme.colors.darkBlueGray,
    theme.colors.quillGray,
    theme.colors.darkBlueGray,
    theme.colors.quillGray,
  ],
  fontFamily = "sans-serif",
  fontSize = "14px",
}: Props) => {
  const {
    columns,
    getColumnState,
    navigateForwards,
    navigateBackwards,
    onFirstColumnClick,
    animationSpeedMultiplier,
  } = useNavigation()

  return Object.keys(columns).length > 0 ? (
    <ThemeProvider theme={theme}>
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
                $fontFamily={fontFamily}
                $fontSize={fontSize}
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
                  $fontFamily={fontFamily}
                  $fontSize={fontSize}
                  $animationSpeedMultiplier={animationSpeedMultiplier}
                  onClick={() => navigateForwards(node, index)}
                >
                  {node.label}
                </Element>
              ))}
          </Column>
        ))}
      </Wrapper>
    </ThemeProvider>
  ) : null
}

export default Navigation
