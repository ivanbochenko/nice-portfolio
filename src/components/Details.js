import React from "react"
import styled from 'styled-components'

const ContactPage = ({heading, text, image}) => (
    <Container>
        <Heading>{heading}</Heading>
        <Text>
            {text}
        </Text>
        <Spacer/>
    </Container>

)

export default ContactPage

const Spacer = styled.div`
  height: 12vh;
`


const Text = styled.p`
  padding: 10vh 10vh 0vh 10vh;
  
`

const Heading = styled.h1`
  padding: 10vh 10vh 0vh 10vh;
  font-weight: normal;

`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
   }
`