import React from 'react'
import Card from './components/card/Card'
import Dimensions from './components/dimensions/Dimensions'

export const CardComponent = ({ data, cards }) => {
  return <Card nodes={data} cards={cards} />
}

export const DimensionsComponent = () => {
  return <Dimensions />
}
