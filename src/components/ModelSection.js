import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import useModel from './useModel'

const ModelSection = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName)
  const ref = useRef(null)
  useEffect(() => {
    if (ref?.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef: ref
      })
    }
  }, [children, modelName, overlayNode, registerModel])

  return (
      <Container ref={ref} {...props}>
        {children}
      </Container>
  )
}

export default ModelSection

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`