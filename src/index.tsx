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
}

const AnimatedDrawerNavigation: React.FC<Props> = ({ navigation, onLeafClick }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationProvider navigation={navigation} onLeafClick={onLeafClick}>
        <Navigation />
      </NavigationProvider>
    </ThemeProvider>
  )
}

export default AnimatedDrawerNavigation
