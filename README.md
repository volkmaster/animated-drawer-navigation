# animated-drawer-navigation

> An animated multi-level drawer navigation for React.

[![NPM](https://img.shields.io/npm/v/animated-drawer-navigation.svg)](https://www.npmjs.com/package/animated-drawer-navigation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

### npm

```bash
npm install --save animated-drawer-navigation
```

### yarn

```bash
yarn add animated-drawer-navigation
```

## Examples

Check out a live demo here: https://volkmaster.github.io/animated-drawer-navigation/

<img src="https://i.imgur.com/COjibf0.png" alt="Example" width="800px"/>

### React

For more information check out the code in the `example` folder.

```tsx
import React, { useState } from "react"
import styled from "styled-components"
import AnimatedDrawerNavigation, { NavigationType } from "animated-drawer-navigation"

const exampleNavigation: NavigationType = {
  id: "",
  label: "The Known World",
  children: [
    {
      id: "0",
      label: "Westeros",
      children: [
        {
          id: "1",
          label: "The North",
          children: [
            {
              id: "2",
              label: "House Stark",
              children: [
                {
                  id: "3",
                  label: "Eddard Stark",
                  children: [],
                },
                {
                  id: "8",
                  label: "Jon Snow",
                  children: [],
                },
                {
                  id: "9",
                  label: "Robb Stark",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: "43",
          label: "The Westerlands",
          children: [
            {
              id: "44",
              label: "House Lannister",
              children: [
                {
                  id: "46",
                  label: "Cersei Lannister",
                  children: [],
                },
                {
                  id: "47",
                  label: "Jaime Lannister",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "125",
      label: "Essos",
      children: [
        {
          id: "126",
          label: "Slaver's Bay",
          children: [
            {
              id: "127",
              label: "House Targaryen",
              children: [
                {
                  id: "128",
                  label: "Daenerys Targaryen",
                  children: [],
                },
                {
                  id: "129",
                  label: "Viserys Targaryen",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: "131",
          label: "Dothraki Sea",
          children: [
            {
              id: "132",
              label: "Dothraki Horde",
              children: [
                {
                  id: "133",
                  label: "Drogo",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const Example = () => {
  const [leaf, setLeaf] = useState<NavigationType | null>(null)
  const onLeafClick = (leaf: NavigationType) => {
    setLeaf(leaf)
  }

  return (
    <Wrapper>
      <AnimatedDrawerNavigation navigation={exampleNavigation} onLeafClick={onLeafClick} />
      <Content>
        <h1>Game of Thrones</h1>
        {leaf && (
          <h3>
            {leaf.id} | {leaf.label}
          </h3>
        )}
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
`

const Content = styled.div`
  padding: 0 15px;
`

export default Example
```

## Documentation

```tsx
<Navigation
  navigation={exampleNavigation}
  onLeafClick={onLeafClick}
  backgroundColorPaletter={["gray", "yellow", "green"]}
  fontColorPalette={["black", "black", "white"]}
  animationSpeedMultiplier={1.5}
/>
```

- `navigation: NavigationType`: hierarchical object where each node has the following properties:

  - `id: string`: unique identifier (all nodes should have a unique string `id`, except for the root node whose `id` should be `""` - an empty string)
  - `label: string`: text that will be displayed in the navigation
  - `children: NavigationType[]`: array of child navigation nodes

- `onLeafClick: (leaf: NavigationType) => void`: callback function returning a node of type `NavigationType` when leaf is clicked (e.g. you can use it to navigate to a new page)

- `backgroundColorPalette?: string[]`: an array of colors used as column background colors (any format accepted by the CSS `background-color` property)

  - default: `["#1f3c4a", "#798e93", "#b4bfbf", "#dbd5c5", "#f1d7b9", "#f6e1cd", "#e4cbb6", "#c2c1a5", "#9fb7c9", "#6b8572", "#c9c7ba", "#4a5e64"]`

- `fontColorPalette?: string[]`: an array of colors used as column font colors (any format accepted by the CSS `color` property)

  - default: `["#dbd5c5", "#dbd5c5", "#1f3c4a", "#1f3c4a", "#1f3c4a", "#1f3c4a", "#1f3c4a", "#1f3c4a", "#1f3c4a", "#dbd5c5", "#1f3c4a", "#dbd5c5"]`

- `font?: string`: a custom font used in the text of the navigation nodes (value is applied to the `font-family` CSS property)

  - default: `sans-serif`

- `animationSpeedMultiplier?: number`: acts as a multiplier that adjusts how quickly or slowly the column animations are executed (e.g. 0.5 means two times faster; 3 means three times slower)
  - default: `1`

## License

MIT © [volkmaster](https://github.com/volkmaster)
