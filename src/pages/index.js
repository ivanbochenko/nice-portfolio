import * as React from "react"
import styled from 'styled-components'
import DefaultOverlayContent from '../components/DefaultOverlayContent'
import ModelsWrapper from '../components/ModelsWrapper' 
import ModelSection from '../components/ModelSection' 

import face from '../images/face.jpg';
import chekkit from '../images/chekkit.jpg';
import shiro from '../images/shiro.jpg';
import diversity from '../images/diversity-kit.jpg';
import misite from '../images/MiSite.jpg';



const Home = () => {
  const models = [
    {
      name: 'Daniella Kaligorsky',
      description: 'Product Designer',
      image: face
    },
    {
      name: 'Checkkit',
      description: 'Self examination',
      image: chekkit
    },
    {
      name: 'Shiro',
      description: 'Wireless charger and bedside light',
      image: shiro
    },
    {
      name: 'Diversity Kit',
      description: 'Design for behaviour change/persuasive design',
      image: diversity
    },
    {
      name: 'MiSite',
      description: 'Hand Arm Vibration Device for Construction Workers',
      image: misite
    },
  ]
  return (
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
    <Spacer/>
    </ModelsWrapper>
  )
}

export default Home

const Container = styled.div`
  background-image: url(${props=>props.image});
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Spacer = styled.div`
  height: 12vh;
`
