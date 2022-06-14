import React from 'react'
import * as S from './Card.styles'
import PropTypes from 'prop-types'

const Card = ({id, title, description, price, deleteBtn}) => {
  return (
    <S.Card id={id}>
      <S.Title>${price} <span>{title}</span></S.Title>
      <S.P>{description}</S.P>
      {deleteBtn}
    </S.Card>
  )
}

Card.propTypes = {
  title : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  deleteBtn: PropTypes.func
}

export default Card