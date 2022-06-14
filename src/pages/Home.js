import React, { useState, useEffect } from 'react'
import Button from '../components/Button/Button'
import CardList from '../components/CardList/CardList'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import Section from '../components/Section/Section'
import Title from '../components/Title/Title'
import { Link } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [data, setData] = useState()

  const getData = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_BACKEND_URL)
      const data = await res.json()
      return setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Section>
        <Container direction={'row'}>
          <Title
            title='Membership Management'
            subtitle='Here you can manage your membership packages. Note: Make sure you are not deleting or deactiviting packages assigned to active users.'
          />
          <Button icon={faPlus}>
            <Link>New Membership</Link>
          </Button>
        </Container>
      </Section>

      <Section>
        <Container>
          {!data && <div>Loading...</div>}
          {data && data.length === 0 && <div>No services found.</div>}
          {data && data.length > 0 && <CardList services={data} />}
        </Container>
      </Section>
      <Footer>Copyright ©. Membership Manager.</Footer>
    </>
  )
}

export default Home
