import React, { useState } from 'react'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import Form from '../components/Form/Form'
import Section from '../components/Section/Section'
import Title from '../components/Title/Title'

const Add = () => {
  const [service, setService] = useState({
    title: '',
    description: '',
    price: 0
  })

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await fetch(process.env.REACT_APP_BACKEND_URL + '/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: service.title,
          description: service.description,
          price: Number(service.price)
        })
      })
      const data = await res.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handle = e => {
    const newdata = { ...service }
    newdata[e.target.id] = e.target.value
    setService(newdata)
  }

  return (
    <>
      <Section>
        <Title title='Create Membership' />
        <Container background='white'>
          <Form handleClick={handleSubmit}>
            <label>
              Title
              <input
                placeholder='Title'
                id='title'
                type='text'
                name='title'
                value={service.title}
                onChange={e => handle(e)}
              />
            </label>
            <label>
              Description
              <input
                placeholder='Description'
                id='description'
                type='text'
                name='description'
                value={service.description}
                onChange={e => handle(e)}
              />
            </label>
            <label>
              Price
              <input
                placeholder='Price'
                id='price'
                type='number'
                name='price'
                value={service.price}
                onChange={e => handle(e)}
              />
            </label>
            <input type='submit' value='New Membership' />
          </Form>
        </Container>
      </Section>
      <Footer>Copyright ©. Membership Manager.</Footer>
    </>
  )
}

export default Add
