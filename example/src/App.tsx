import { useState } from "react"
import {
  AnimatedDrawerNavigationProvider,
  AnimatedDrawerNavigation,
  AnimatedDrawerNavigationType,
} from "animated-drawer-navigation"
import { NAVIGATION, CHARACTERS } from "./data/mock"
import { Wrapper, Content, Title, Subtitle, Description } from "./styles"

const App = () => {
  const [leafNode, setLeafNode] = useState<AnimatedDrawerNavigationType | null>(null)
  const onLeafNodeClick = (node: AnimatedDrawerNavigationType) => {
    setLeafNode(node)
  }

  return (
    <AnimatedDrawerNavigationProvider navigation={NAVIGATION} onLeafNodeClick={onLeafNodeClick}>
      <Wrapper>
        <AnimatedDrawerNavigation fontFamily="Proxima Nova Regular" />
        <Content>
          <Title>Game of Thrones</Title>
          {leafNode && <Character {...leafNode} />}
        </Content>
      </Wrapper>
    </AnimatedDrawerNavigationProvider>
  )
}

const Character = ({ id, label }: AnimatedDrawerNavigationType) => {
  const character = id in CHARACTERS && CHARACTERS[id]
  return (
    <>
      <Subtitle>{label}</Subtitle>
      {character && (
        <>
          {character.image && <img src={character.image} alt={label} />}
          <Description>{character.description}</Description>
        </>
      )}
    </>
  )
}

export default App
