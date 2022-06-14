import React from 'react'
import PropTypes from 'prop-types'
import * as S from './CardList.styles'
import Card from '../Card/Card'
import DeleteBtn from '../DeleteBtn/DeleteBtn'


const CardList = ({ services }) => {

  const handleClick = async e => {
    try {
    const cardId = e.target.parentElement.parentElement.parentElement.id

    const res = await fetch(process.env.REACT_APP_BACKEND_URL + '/delete/' + cardId, {
      method: "DELETE",
    })
    const data = await res.json()
    
    console.log(data)
  } catch (err) {
    console.log(err)
  }
  }

  return ( 
    <S.CardList>
      {services && services.map((service, index) => (
        <Card id={service.id} key={index} title={service.title} description={service.description} price={service.price} deleteBtn={<DeleteBtn handle={handleClick}/>}/>
      ))}

    </S.CardList>
  )
}

CardList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired, 
      description: PropTypes.string.isRequired, 
      price: PropTypes.number.isRequired,
    })
    ).isRequired,
}


export default CardList
