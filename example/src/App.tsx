import { useState } from "react"
import AnimatedDrawerNavigation, { NavigationType } from "animated-drawer-navigation"
import { Wrapper, Content, Title, Subtitle, Description } from "./styles"
import { NAVIGATION, CHARACTERS } from "./data/mock"

const App = () => {
  const [leaf, setLeaf] = useState<NavigationType | null>(null)
  const onLeafClick = (leaf: NavigationType) => {
    setLeaf(leaf)
  }

  return (
    <Wrapper>
      <AnimatedDrawerNavigation
        navigation={NAVIGATION}
        onLeafClick={onLeafClick}
        font="Proxima Nova Regular"
      />
      <Content>
        <Title>Game of Thrones</Title>
        {leaf && <Character {...leaf} />}
      </Content>
    </Wrapper>
  )
}

const Character = ({ id, label }: NavigationType) => {
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
