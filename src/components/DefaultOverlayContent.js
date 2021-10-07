import React from 'react'
import styled from 'styled-components'

import { DownArrow } from './IconSVG'

const DefaultOverlayContent = ({ label, description }) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>
      <SpacerTop />
      <Group>
        <Buttons>
          <button>Custom Order</button>
          <button className="white">Existing Inventory</button>

        </Buttons>
        <Arrow />
      </Group>

        
      <Spacer />
      
    </Container>
  )
}

export default DefaultOverlayContent

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`
const SpacerTop = styled.div`
  height: 24vh;
`

const Spacer = styled.div`
  height: 12vh;
`
const Group = styled.div`
  height: 16vh;
`

const Heading = styled.div`
  margin-top: 16.5vh;

  width: 100%;
  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #393c41;
  }
  > h2 {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #5c5e62;
  }
`

const Arrow = styled(DownArrow)`
  position: sticky;
  top: 0;
  display: flex;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  width: 40px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`


const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    background: #1a1720;
    color: #fff;
    opacity: 0.8;
    width: 30vh;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;

    &.white {
      background: #fff;
      color: #1a1720;
      opacity: 0.65;
    }

    & + button {
      margin: 10px 0 0;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;

    > button + button {
      margin: 0 0 0 10px;
    }
  }

`
