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
import {
  AnimatedDrawerNavigationProvider,
  AnimatedDrawerNavigation,
  AnimatedDrawerNavigationType,
} from "animated-drawer-navigation"

const exampleNavigation: AnimatedDrawerNavigationType = {
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
                  extra: { route: "eddard-stark" },
                },
                {
                  id: "8",
                  label: "Jon Snow",
                  extra: { route: "jon-snow" },
                },
                {
                  id: "9",
                  label: "Robb Stark",
                  extra: { route: "rob-stark" },
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
                  extra: { route: "cersei-lannister" },
                },
                {
                  id: "47",
                  label: "Jaime Lannister",
                  extra: { route: "jaime-lannister" },
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
                  extra: { route: "daenerys-targaryen" },
                },
                {
                  id: "129",
                  label: "Viserys Targaryen",
                  extra: { route: "viserys-targaryen" },
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
                  extra: { route: "drogo" },
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
  const [leafNode, setLeafNode] = useState<AnimatedDrawerNavigationType | null>(null)
  const onLeafNodeClick = (node: AnimatedDrawerNavigationType) => {
    setLeafNode(node)
    // or navigate to a new route
  }

  return (
    <AnimatedDrawerNavigationProvider
      navigation={exampleNavigation}
      onLeafNodeClick={onLeafNodeClick}
    >
      <Wrapper>
        <AnimatedDrawerNavigation />
        <div>
          <h1>Game of Thrones</h1>
          {leafNode && (
            <h3>
              {leafNode.id} | {leafNode.label}
            </h3>
          )}
        </div>
      </Wrapper>
    </AnimatedDrawerNavigationProvider>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
`

export default Example
```

## Documentation

```tsx
<AnimatedDrawerNavigationProvider
  navigation={exampleNavigation}
  onLeafNodeClick={onLeafNodeClick}
  animationSpeedMultiplier={1.5}
/>
```

- `navigation: NavigationType`: hierarchical object where each node has the following properties:

  - `id: string`: unique identifier (all nodes should have a unique string `id`, except for the root node whose `id` should be `""` - an empty string)
  - `label: string`: text that will be displayed in the navigation
  - `extra?: any`: any additional node data you want to use on leaf node clicks (e.g. `{ route: "jon-snow" }`)
  - `children?: NavigationType[]`: array of child navigation nodes

- `onLeafNodeClick: (leaf: NavigationType) => void`: callback function returning a node of type `NavigationType` when leaf is clicked (e.g. you can use it to navigate to a new route)

- `animationSpeedMultiplier?: number`: acts as a multiplier that adjusts how quickly or slowly the column animations are executed (e.g. 0.5 means two times faster; 3 means three times slower)
  - default: `1`

```tsx
<AnimatedDrawerNavigation
  backgroundColorPaletter={["gray", "yellow", "green"]}
  fontColorPalette={["black", "black", "white"]}
  font="Proxima Nova Regular"
/>
```

- `backgroundColorPalette?: string[]`: an array of colors used as column background colors (any format accepted by the CSS `background-color` property)

  - default: `["#1f3c4a", "#798e93", "#b4bfbf", "#dbd5c5", "#f1d7b9", "#f6e1cd", "#e4cbb6", "#c2c1a5", "#9fb7c9", "#6b8572", "#c9c7ba", "#4a5e64"]`

- `fontColorPalette?: string[]`: an array of colors used as column font colors (any format accepted by the CSS `color` property)

  - default: `["#dbd5c5", "#dbd5c5", "#1f3c4a", "#1f3c4a", "#1f3c4a", "#1f3c4a", "#1f3c4a", "#1f3c4a", "#1f3c4a", "#dbd5c5", "#1f3c4a", "#dbd5c5"]`

- `fontFamily?: string`: a custom font used in the navigation node text (value is applied to the `font-family` CSS property)

  - default: `sans-serif`

- `fontSize?: string`: a custom font size navigation node text (value is applied to the `font-size` CSS property)

  - default: `14px`

## License

MIT © [volkmaster](https://github.com/volkmaster)
