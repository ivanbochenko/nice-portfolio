import * as React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import UniqueOverlay from '../components/UniqueOverlay'
import DefaultOverlayContent from '../components/DefaultOverlayContent'
import ModelsWrapper from '../components/ModelsWrapper' 
import ModelSection from '../components/ModelSection' 


import face from '../images/face.jpg';
import chekkit from '../images/chekkit.jpg';
import shiro from '../images/shiro.jpg';


const IndexPage = () => {
  const models = [
    {
      name: 'Daniella Kaligorsky',
      description: 'Product Designer',
      image: face
    },
    {
      name: 'Chekkit',
      description: 'Self examination',
      image: chekkit
    },
    {
      name: 'Shiro',
      description: 'Wireless charger and bedside light',
      image: shiro
    },
  ]
  return (
    <>
      <ModelsWrapper>
        {models.map(model => (
          <Container image={model.image}>
            <ModelSection
              key={model.name}
              className="colored"
              modelName={model.name}
              overlayNode={
                <DefaultOverlayContent
                  label={model.name}
                  description={model.description}
                />
              }
            />
          </Container>
        ))}
        <UniqueOverlay />
        <Spacer />
      </ModelsWrapper>
      <GlobalStyles/>
    </>
  )
}

export default IndexPage


// styles

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, input, button {
    font-family: 'Roboto', sans-serif;
  }
  @keyframes animateDown {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(5px);
    }

    40% {
      transform: translateY(3px);
    }

  }
`

const Container = styled.div`
  background-image: url(${props=>props.image});
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Spacer = styled.div`
  height: 12vh;
  background: #b1b6c1;
`
