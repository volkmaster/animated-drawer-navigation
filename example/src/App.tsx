import React, { useState } from "react"
import AnimatedDrawerNavigation, { NavigationType } from "animated-drawer-navigation"
import { Wrapper, Content, Title, Subtitle } from "./styles"
import NAVIGATION from "./data/navigation"

const App = () => {
  const [leaf, setLeaf] = useState<NavigationType | null>(null)
  const onLeafClick = (leaf: NavigationType) => {
    setLeaf(leaf)
  }

  return (
    <Wrapper>
      <AnimatedDrawerNavigation navigation={NAVIGATION} onLeafClick={onLeafClick} />
      <Content>
        <Title>Game of Thrones</Title>
        {leaf && (
          <Subtitle>
            {leaf.id} | {leaf.label}
          </Subtitle>
        )}
      </Content>
    </Wrapper>
  )
}

export default App
