import * as React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import UniqueOverlay from '../components/UniqueOverlay'
import DefaultOverlayContent from '../components/DefaultOverlayContent'
import ModelsWrapper from '../components/ModelsWrapper' 
import ModelSection from '../components/ModelSection' 


import face from '../images/face.png';
import chekkit from '../images/chekkit.jpg';
import shiro from '../images/shiro.png';


const IndexPage = () => {
  const models = [
    {
      name: 'Daniella Kaligorsky',
      description: 'Product Designer'
    },
    {
      name: 'Chekkit',
      description: 'Self examination'
    },
    {
      name: 'Shiro',
      description: 'Wireless charger and bedside light',
    },
  ]
  return (
    <>
      <Container>
        <ModelsWrapper>
          {models.map(model => (
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
          ))}
          <Spacer />
          <UniqueOverlay />
        </ModelsWrapper>
      </Container>
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
  .colored{    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
  }
  .colored:nth-child(1) {

  }
  .colored:nth-child(2) {

    background-image: url(${face});
  }
  .colored:nth-child(3) {
    background-image: url(${chekkit});
  }
  .colored:nth-child(4) {
    background-image: url(${shiro});
  }
  .colored:nth-child(5) {
    background: #a9fdac;
  }
  .colored:nth-child(6) {
    background: #90f29c;
  }
  .colored:nth-child(7) {
    background: #77e68c;
  }
`

const Spacer = styled.div`
  height: 15vh;
  background: #b1b6c1;
  /* background: radial-gradient(circle, rgba(92,94,98,0.6001751042213761) 0%, rgba(251,251,251,1) 90%, rgba(255,255,255,1) 100%); */
`
