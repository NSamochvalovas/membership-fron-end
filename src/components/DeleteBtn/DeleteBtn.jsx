import React from 'react'
import * as S from './Delete.styles'
import PropTypes from 'prop-types'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const DeleteBtn = ({handle}) => {
  return (
    <S.DeleteBtn  onClick={handle}><S.Icon icon={faTrashCan}/></S.DeleteBtn>
  )
}

DeleteBtn.propTypes = {
    handle: PropTypes.func
}

export default DeleteBtn