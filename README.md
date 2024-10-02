# animated-drawer-navigation

> An animated multi-level drawer navigation

[![NPM](https://img.shields.io/npm/v/animated-drawer-navigation.svg)](https://www.npmjs.com/package/animated-drawer-navigation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save animated-drawer-navigation
```

or

```bash
yarn add animated-drawer-navigation
```

## Parameters

- `navigation: NavigationType`: hierarchical object where each node consists of
  - `id: string`
  - `label: string`
  - `children: NavigationType`
- `onLeafClick: (leaf: NavigationType) => void`: callback function returning a node of type `NavigationType` when leaf is clicked (e.g. you can use it to navigate to a new page)

## Examples

<img src="https://i.imgur.com/hMUSc8E.png" alt="Example" width="800px"/>

### React

(for more information check out the code in the `example` folder)

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
                  id: "4",
                  label: "Catelyn Stark",
                  children: [],
                },
                {
                  id: "5",
                  label: "Sansa Stark",
                  children: [],
                },
                {
                  id: "6",
                  label: "Arya Stark",
                  children: [],
                },
                {
                  id: "7",
                  label: "Bran Stark",
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
                {
                  id: "10",
                  label: "Rickon Stark",
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
                  id: "45",
                  label: "Tywin Lannister",
                  children: [],
                },
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
                {
                  id: "48",
                  label: "Tyrion Lannister",
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
                {
                  id: "130",
                  label: "Aemon Targaryen",
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
                {
                  id: "134",
                  label: "Rakharo",
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

## License

MIT © [volkmaster](https://github.com/volkmaster)
