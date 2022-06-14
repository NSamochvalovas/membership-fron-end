import React from 'react'
import * as S from './Container.styles'

const Container = ({children, background}) => {

  const transparent = {
    background: 'transparent'
  }

  const white = {
    background: '#fff'
  }


  return (
    <S.Container style={background === 'white' ? white : transparent}>{children}</S.Container>
  )
}

export default Container