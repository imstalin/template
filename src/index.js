import React from 'react'
import styles from './styles.module.css'

import Card from './components/card/Card'
import Dimensions from './components/dimensions/Dimensions'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const CardComponent = () => {
  return <Card />
}

export const DimensionsComponent = () => {
  return <Dimensions />
}
