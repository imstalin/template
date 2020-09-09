import * as React from 'react'
import Card from './components/card/Card'
import Measurement from './components/Measurement/Measurement'

export const CardComponent = ({ data, cards }) => {
  return <Card nodes={data} cards={cards} />
}

export const MeasurmentComponent = ({ data, specs, layout }) => {
  return <Measurement data={data} specs={specs} layout={layout} />
}
