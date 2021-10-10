import React from "react"
import styled from 'styled-components'

const ContactPage = () => (
  <Container>
    <Heading>My contacts</Heading>
    <Text>
      
      Email: daniella.kaligorsky@healthbeacon.com
    </Text>
  </Container>

)

export default ContactPage


const Text = styled.p`
  padding: 10vh;
  
`

const Heading = styled.h1`
  padding: 10vh;
  font-weight: normal;

`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10vh;
  @media (max-width: 800px) {
    flex-direction: column;
   }
`