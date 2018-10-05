import styled from 'styled-components'
import { space, fontSize, color, borderRadius } from 'styled-system'

const Button = styled.div.attrs({
  className: props => props.disabled ? 'button isDisabled' : 'button'
})`
  ${space}
  ${fontSize}
  ${color}
  ${borderRadius}
`

export default Button
