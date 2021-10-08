import React from 'react';
import Layout from './components/layout'

export const wrapPageElement = ({ element }) => {
  return (
      <Layout>{element}</Layout>
  )
}