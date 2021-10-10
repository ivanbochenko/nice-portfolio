import React from "react"
import styled from 'styled-components'

const AboutPage = () => (
    <Container>
      <Heading>My name is Daniella Kaligorsky</Heading>
      <Text>

        I am a product design graduate from Technological University Dublin.
        I have developed a passion for solving every day problems through a
        variety of projects I have completed during my four year degree.
        <br/>
        <br/>
        I am half Ukrainian, half a mix of Austrian and Greek with a sprinkle of
        English. I am lucky to have a mix of languages that have helped me
        interact and understand different cultures.
        <br/>
        <br/>
        I have always been interested in design, particularly in trying to help
        others with simple outcomes. The process is never the same and that is
        why there is so much to learn which makes the future more exciting.
        <br/>
        <br/>
        When not working on projects, I like to play tennis and read books.
        Since I was a child, I have been interested in animals, therefore I love
        nature and have a passion for scuba diving.
      </Text>
    </Container>

)

export default AboutPage

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