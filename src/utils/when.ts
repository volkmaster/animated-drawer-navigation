import { css } from "styled-components"

/**
 * A shortcut for conditionally applying a style to the styled component, based on whether
 * a specific property has a truthy value.
 * @param {string} propName the name of property to check for truthy value.
 * @returns {function} a function that conditionally applies css.
 */
const when =
  (propName: string) =>
  (...args: Parameters<typeof css>) => css`
    ${(props) => props[propName] && css(...args)}
  `

export default when
