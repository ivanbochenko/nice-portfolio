import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Drawer from './Drawer'

const layout = ({children}) => {
    return (
        <>
            {children}
            <Drawer />
            <GlobalStyles/>
        </>
    )
}

export default layout

// styles

const GlobalStyles = createGlobalStyle`
  body{
    background: #b1b9c1;

  }
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