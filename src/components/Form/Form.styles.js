import styled from 'styled-components'

export const Form = styled.form`
  width: 30rem;
  margin: 0 auto;
  background-color: #fff;
  padding: 3rem;
  display: flex;
  flex-direction: column;

  input {
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid grey;
    outline: none;
  }

  input[type='submit'] {
    cursor: pointer;
  }
`
