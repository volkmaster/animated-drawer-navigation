import React from "react"
import { ThemeProvider } from "styled-components"

import { NavigationProvider, NavigationType } from "./contexts/navigation"

import Navigation from "./components/navigation"
import theme from "./theme"
import GlobalStyles from "./styles"

interface Props {
  navigation: NavigationType
}

const AnimatedDrawerNavigation: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationProvider navigation={navigation}>
        <Navigation />
      </NavigationProvider>
    </ThemeProvider>
  )
}

export default AnimatedDrawerNavigation
