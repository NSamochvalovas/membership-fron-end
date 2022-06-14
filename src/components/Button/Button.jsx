import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Button.styles'

const Button = ({icon, type,  handleClick}) => {
  return <S.Button type={type} onClick={handleClick}><S.Icon icon={icon} /><S.StyledLink to="/add">New Membership</S.StyledLink></S.Button>
}

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    children: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
}

Button.defaultProps = {
    type: 'button'
}

export default Button