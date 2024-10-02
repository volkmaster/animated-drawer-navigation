import styled, { keyframes, DefaultTheme } from "styled-components"
import { lighten } from "polished"
import { when, eq } from "../../utils"
import { ANIMATION_TIME_FACTOR } from "../../constants"

const timeColumnStateChange = 0.2 * ANIMATION_TIME_FACTOR
const timeElementFadeIn = 0.035 * ANIMATION_TIME_FACTOR
const timeElementFadeInDelay = timeColumnStateChange - timeElementFadeIn
const timeElementFadeOut = 0.05 * ANIMATION_TIME_FACTOR
const timeElementHoverActive = 0.1 * ANIMATION_TIME_FACTOR

const wideColumnWidth = "185px"
const narrowColumnWidth = "40px"

const getBackgroundColor = (theme: DefaultTheme, index: number) => {
  return [
    theme.colors.darkBlueGray,
    theme.colors.bluishGray,
    theme.colors.ashGray,
    theme.colors.quillGray,
    theme.colors.doubleSpanishWhite,
  ][index]
}

const getFontColor = (theme: DefaultTheme, index: number) => {
  return [
    theme.colors.quillGray,
    theme.colors.quillGray,
    theme.colors.darkBlueGray,
    theme.colors.darkBlueGray,
    theme.colors.darkBlueGray,
  ][index]
}

export const Wrapper = styled.div`
  display: flex;
`

const hideWidenColumn = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${wideColumnWidth};
  }
`

const widenHideColumn = keyframes`
  from {
    width: ${wideColumnWidth};
  }
  to {
    width: 0;
  }
`

const hideNarrowColumn = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${narrowColumnWidth};
  }
`

const narrowHideColumn = keyframes`
  from {
    width: ${narrowColumnWidth};
  }
  to {
    width: 0;
  }
`

const widenNarrowColumn = keyframes`
  from {
    width: ${wideColumnWidth};
  }
  to {
    width: ${narrowColumnWidth};
  }
`

const narrowWidenColumn = keyframes`
  from {
    width: ${narrowColumnWidth};
  }
  to {
    width: ${wideColumnWidth};
  }
`

interface ColumnProps {
  $state: string
  $index: number
  children: React.ReactNode
}

export const Column = styled.div<ColumnProps>`
  display: none;
  background-color: ${({ theme, $index }: { theme: DefaultTheme; $index: number }) =>
    getBackgroundColor(theme, $index)};
  overflow-y: auto;

  ${eq("$state", "hideWiden")`
    padding: 5px;
    display: block;
    animation: ${hideWidenColumn} ${timeColumnStateChange}s ease-out forwards;
  `}

  ${eq("$state", "widenHide")`
    display: block;
    animation: ${widenHideColumn} ${timeColumnStateChange}s ease-in;
  `}

  ${eq("$state", "hideNarrow")`
    height: 100%;
    display: block;
    animation: ${hideNarrowColumn} ${timeColumnStateChange}s ease-out forwards;
  `}

  ${eq("$state", "narrowHide")`
    display: block;
    animation: ${narrowHideColumn} ${timeColumnStateChange}s ease-in;
  `}

  ${eq("$state", "widenNarrow")`
    height: 100%;
    display: block;
    animation: ${widenNarrowColumn} ${timeColumnStateChange}s ease-in forwards;
  `}

  ${eq("$state", "narrowWiden")`
    padding: 5px;
    display: block;
    animation: ${narrowWidenColumn} ${timeColumnStateChange}s ease-out forwards;
  `}
`

const fadeInElement = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOutElement = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

interface ElementProps {
  $state: string
  $index: number
  $wide?: boolean
  $narrow?: boolean
  $active?: boolean
  children: React.ReactNode
}

export const Element = styled.div<ElementProps>`
  color: ${({ theme, $index }: { theme: DefaultTheme; $index: number }) =>
    lighten(0.1, getFontColor(theme, $index))};
  cursor: pointer;

  ${when("$wide")`
    width: 100%;
    min-height: 15px;
    margin-bottom: 6px;
    padding: 7px;
    font-size: 14px;
    line-height: 20px;
    transition: background-color ${timeElementHoverActive}s linear, font-family ${timeElementHoverActive}s linear;
  `}

  ${when("$narrow")`
    position: absolute;
    width: 100vh;
    height: ${narrowColumnWidth};
    padding: 0 20px 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transform: rotate(-90deg) translateX(-100%);
    transform-origin: 0% 0%;
    font-size: 20px;
    font-weight: bold;
  `}

  ${eq("$state", "hideWiden")`
    animation: ${fadeInElement} ${timeElementFadeIn}s ease-out ${timeElementFadeInDelay}s;
    animation-fill-mode: both;
  `}

  ${eq("$state", "hideNarrow")`
    animation: ${fadeInElement} ${timeElementFadeIn}s ease-out ${timeElementFadeInDelay}s;
    animation-fill-mode: both;
  `}

  ${eq("$state", "narrowWiden")`
    animation: ${fadeInElement} ${timeElementFadeIn}s ease-out ${timeElementFadeInDelay}s;
    animation-fill-mode: both;
  `}

  ${eq("$state", "widenHide")`
    animation: ${fadeOutElement} ${timeElementFadeOut}s ease-in;
    animation-fill-mode: both;
  `}

  ${eq("$state", "narrowHide")`
    animation: ${fadeOutElement} ${timeElementFadeOut}s ease-in;
    animation-fill-mode: both;
  `}

  &:hover {
    ${when("$wide")`
      background-color: ${({ theme, $index }: { theme: DefaultTheme; $index: number }) => lighten(0.1, getBackgroundColor(theme, $index))};
    `}
  }

  ${when("$active")`
    font-weight: bold;
    background-color: ${({ theme, $index }: { theme: DefaultTheme; $index: number }) => lighten(0.1, getBackgroundColor(theme, $index))};
  `}
`
