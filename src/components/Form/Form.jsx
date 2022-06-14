import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Form.styles'

const Form = ({handleClick, children}) => {
  return (
    <S.Form onSubmit={handleClick}>{children}</S.Form>
  )
}

Form.propTypes = {
    handleClick: PropTypes.func
}

export default Form