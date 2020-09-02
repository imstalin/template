import React from 'react'

import './card.css'
import CardItem from '../cardItem/CardItem'

const renderCards = (props) => {
  let { nodes } = props
  if (props && props.cards) {
    if (nodes && nodes.length % 2 === 1) {
      nodes = nodes.slice(0, nodes.length)
    }
  } else {
    if (nodes && nodes.length % 3 === 1) {
      nodes = nodes.slice(0, nodes.length - 1)
    }
  }
  return nodes.map((item, i) => (
    <div
      key={i}
      className={`w-full sm:w-1/2 xl:w-1/${
        props.cards ? props.cards : 3
      } px-3 xl:px-6 py-5 card-box `}
    >
      <CardItem {...item} cardLength={props.cards} index={i} />
    </div>
  ))
}
const Card = (props) => {
  const { nodes } = props
  if (nodes === undefined) {
    return <div>Loading..</div>
  }

  return (
    <div className='pt-6 overflow-hidden addBorder'>
      <div className='flex flex-wrap -mx-1 xl:-mx-6'>{renderCards(props)}</div>
    </div>
  )
}

export default Card
