import React, {useState} from 'react'
import styled from 'styled-components'

import { BurgerSVG, CloseSVG, BehanceSVG, InstagramSVG, LinkedinSVG } from './IconSVG'


const UniqueOverlay = () => {
  const [burger, setBurger] = useState(false)

  return (
    <Container>
        <Burger onClick={()=>setBurger(true)}/>
        <BurgerNav show={burger}>
          <CloseWrapper>
            <Close onClick={()=>setBurger(false)}/>
          </CloseWrapper>
          <li><a href="/">Home</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">About</a></li>
          <Spacer />
          <Icons>
            <ul>
              <li>
                <Behance />
              </li>
              <li>
                <Instagram />
              </li>
              <li>
                <Linkedin />
              </li>
            </ul>
          </Icons>
        </BurgerNav>
    </Container>
  )
}

export default UniqueOverlay

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Spacer = styled.div`
  height: 70vh;
`

const Icons = styled.div`
  padding-right: 10px;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li {
      list-style: none; 
      padding-right: 10px;

    }
  }
`

const BurgerNav = styled.div`
  transition: transform 0.2s;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 30vh;
  list-style: none;
  padding: 20px;
  transform: ${props => props.show ? "translateX(0)":"translateX(100%)"};
  li{
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a{
      font-weight: 600;
      text-decoration: none;
      color: #393c41;
    }
  }
`

const Burger = styled(BurgerSVG)`
  position: fixed;
  top: 15px;
  right: 25px;

  width: 22px;
  height: 22px;
  cursor: pointer;
`

const Close = styled(CloseSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 100;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Linkedin = styled(LinkedinSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

const Instagram = styled(InstagramSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

const Behance = styled(BehanceSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`