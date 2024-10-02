import { css } from "styled-components"

/**
 * A shortcut for conditionally applying a style to the styled component, based on whether
 * a specific property is equal to some value.
 * @param {string} propName the name of property to check for equality.
 * @param {any} value the value to check against.
 * @returns {function} a function that conditionally applies css.
 */
const eq =
  (propName: string, value: any) =>
  (...args: Parameters<typeof css>) => css`
    ${(props) => props[propName] === value && css(...args)}
  `

export default eq
