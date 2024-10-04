import React from "react"
import { ThemeProvider } from "styled-components"
import { NavigationProvider, NavigationType } from "./contexts/navigation"
export { NavigationType } from "./contexts/navigation"
import Navigation from "./components/navigation"
import theme from "./theme"
import GlobalStyles from "./styles"

interface Props {
  navigation: NavigationType
  onLeafClick: (leaf: NavigationType) => void
  backgroundColorPalette?: string[]
  fontColorPalette?: string[]
  font?: string
  animationSpeedMultiplier?: number
}

const AnimatedDrawerNavigation: React.FC<Props> = ({
  navigation,
  onLeafClick,
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
  font = "sans-serif",
  animationSpeedMultiplier = 1,
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationProvider
        navigation={navigation}
        onLeafClick={onLeafClick}
        animationSpeedMultiplier={animationSpeedMultiplier}
      >
        <Navigation
          backgroundColorPalette={backgroundColorPalette}
          fontColorPalette={fontColorPalette}
          font={font}
          animationSpeedMultiplier={animationSpeedMultiplier}
        />
      </NavigationProvider>
    </ThemeProvider>
  )
}

export default AnimatedDrawerNavigation
