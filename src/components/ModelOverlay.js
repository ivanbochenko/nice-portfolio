import React, { useCallback, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

import useWrapperScroll from './useWrapperScroll'

const ModelOverlay = ({ model, children }) => {
  const { scrollY } = useWrapperScroll()

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop ?? 0,
      offsetHeight: model.sectionRef.current?.offsetHeight ?? 0
    }
  }, [model.sectionRef])

  const [dimensions, setDimensions] = useState(
    getSectionDimensions()
  )

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [getSectionDimensions, model.sectionRef])

  const sectionScrollProgress = useTransform(
    scrollY,
    y => (y - dimensions.offsetTop) / dimensions.offsetHeight
  )
  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  )
  const pointerEvents = useTransform(opacity, value =>
    value > 0 ? 'auto' : 'none'
  )

  return <Container style={{ opacity, pointerEvents }}>{children}</Container>
}

export default ModelOverlay

const Container = styled(motion.div)`
  position: sticky;
  top: 0;
  height: 100vh;
  margin-top: -100vh;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: center;
`
