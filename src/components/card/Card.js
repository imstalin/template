import React from 'react'

import './card.css'
const Card = () => {
  return (
    <div class='cardContainer card'>
      <img
        src='http://weaver-ai-templates.s3-website.eu-west-2.amazonaws.com/static/2b42cecd35aab3e20e5605c1d09d3e21/0b533/448ca0e9-fc2a-4782-9b2a-896e7b9da742.png'
        class='card-img-top'
      />
      <div class='card-body'>
        <h5 class='card-title'>Keep Salads Crisp! Avoid wilting</h5>
        <p class='card-text'>
          A convenient space for all your fresh vegetables and fruits with its
          own designated space.
        </p>
      </div>
    </div>
  )
}

export default Card
