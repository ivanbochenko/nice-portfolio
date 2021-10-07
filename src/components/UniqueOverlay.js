import React, {useState} from 'react'
import styled from 'styled-components'
import { useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

import { LogoSVG, BurgerSVG, CloseSVG } from './IconSVG'
import useWrapperScroll from './useWrapperScroll'

const UniqueOverlay = () => {
  const [burger, setBurger] = useState(false)
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger onClick={()=>setBurger(true)}/>
        <BurgerNav show={burger}>
          <CloseWrapper>
            <Close onClick={()=>setBurger(false)}/>
          </CloseWrapper>
          <li><a href="/">Home</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">About</a></li>

        </BurgerNav>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <p>Porfolio</p>
          </li>
          <li>
            <p>made with <span role='img' aria-label='heart'>💜</span> </p>
          </li>
          <li>
            <p>by Bochenko Ivan</p>
          </li>
        </ul>
      </Footer>
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

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  min-height: 52px;
`

const Logo = styled(LogoSVG)`
  height: 17px;
  cursor: pointer;
`

const Burger = styled(BurgerSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;

  padding-right: 5px;
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

 const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;

      font-size: 14px;

      & + li {
        margin: 10px 0 0;
      }

      a {
        text-decoration: none;
        color: #393c41;

        &:hover {
          color: #000;
        }
      }
    }
  }

  margin-bottom: 30px;

  @media (min-width: 600px) {
    margin-bottom: 38px;

    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
`
