import styled, { css, keyframes } from "styled-components"
import { lighten } from "polished"

const timeColumnStateChange = 0.2
const timeElementFadeIn = 0.035
const timeElementFadeInDelay = timeColumnStateChange - timeElementFadeIn
const timeElementFadeOut = 0.05
const timeElementHoverActive = 0.1

const wideColumnWidth = "185px"
const narrowColumnWidth = "40px"

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
  $backgroundColorPalette: string[]
  $animationSpeedMultiplier: number
}

export const Column = styled.div<ColumnProps>`
  display: none;
  background-color: ${({ $index, $backgroundColorPalette }) => $backgroundColorPalette[$index]};
  overflow-y: auto;

  ${({ $state, $animationSpeedMultiplier }) =>
    $state === "hideWiden" &&
    css`
      padding: 5px;
      display: block;
      animation: ${hideWidenColumn} ${timeColumnStateChange * $animationSpeedMultiplier}s ease-out
        forwards;
    `}

  ${({ $state, $animationSpeedMultiplier }) =>
    $state === "widenHide" &&
    css`
      display: block;
      animation: ${widenHideColumn} ${timeColumnStateChange * $animationSpeedMultiplier}s ease-in;
    `}

  ${({ $state, $animationSpeedMultiplier }) =>
    $state === "hideNarrow" &&
    css`
      height: 100%;
      display: block;
      animation: ${hideNarrowColumn} ${timeColumnStateChange * $animationSpeedMultiplier}s ease-out
        forwards;
    `}

  ${({ $state, $animationSpeedMultiplier }) =>
    $state === "narrowHide" &&
    css`
      display: block;
      animation: ${narrowHideColumn} ${timeColumnStateChange * $animationSpeedMultiplier}s ease-in;
    `}

  ${({ $state, $animationSpeedMultiplier }) =>
    $state === "widenNarrow" &&
    css`
      height: 100%;
      display: block;
      animation: ${widenNarrowColumn} ${timeColumnStateChange * $animationSpeedMultiplier}s ease-in
        forwards;
    `}

  ${({ $state, $animationSpeedMultiplier }) =>
    $state === "narrowWiden" &&
    css`
      padding: 5px;
      display: block;
      animation: ${narrowWidenColumn} ${timeColumnStateChange * $animationSpeedMultiplier}s ease-out
        forwards;
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
  $backgroundColorPalette: string[]
  $fontColorPalette: string[]
  $font: string
  $animationSpeedMultiplier: number
}

export const Element = styled.div<ElementProps>`
  font-family: ${({ $font }) => $font};
  color: ${({ $index, $fontColorPalette }) => lighten(0.1, $fontColorPalette[$index])};
  cursor: pointer;

  ${({ $wide }) =>
    $wide &&
    css`
      width: 100%;
      min-height: 15px;
      margin-bottom: 6px;
      padding: 7px;
      font-size: 14px;
      line-height: 20px;
      transition:
        background-color ${timeElementHoverActive}s linear,
        font-family ${timeElementHoverActive}s linear;
    `}

  ${({ $narrow }) =>
    $narrow &&
    css`
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

  ${({ $state, $animationSpeedMultiplier }) =>
    ["hideWiden", "hideNarrow", "narrowWiden"].includes($state) &&
    css`
      animation: ${fadeInElement} ${timeElementFadeIn * $animationSpeedMultiplier}s ease-out
        ${timeElementFadeInDelay * $animationSpeedMultiplier}s both;
    `}

  ${({ $state, $animationSpeedMultiplier }) =>
    ["widenHide", "narrowHide"].includes($state) &&
    css`
      animation: ${fadeOutElement} ${timeElementFadeOut * $animationSpeedMultiplier}s ease-in both;
    `}

  &:hover {
    ${({ $wide, $backgroundColorPalette, $index }) =>
      $wide &&
      css`
        background-color: ${lighten(0.1, $backgroundColorPalette[$index])};
      `}
  }

  ${({ $active, $index, $backgroundColorPalette }) =>
    $active &&
    css`
      font-weight: bold;
      background-color: ${lighten(0.1, $backgroundColorPalette[$index])};
    `}
`
