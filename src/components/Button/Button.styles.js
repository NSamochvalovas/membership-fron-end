import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = styled.button`
  background: transparent;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  background-color: #4547f0;
  color: #fff;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`
