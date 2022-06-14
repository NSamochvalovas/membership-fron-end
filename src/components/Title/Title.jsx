import React from 'react'
import * as S from './Title.styles'

const Title = ({title, subtitle}) => {
  return (
    <S.Title>
        <S.h1>{title}</S.h1>
        <S.p>{subtitle}</S.p>
    </S.Title>
  )
}

export default Title