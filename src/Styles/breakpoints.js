import { css } from 'styled-components'

const sizes = {
  xl: 1440,
  lg: 1170,
  md: 768,
  sm: 480,
  smallPhone: 0,
  phone: 321,
  tablet: 768,
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
