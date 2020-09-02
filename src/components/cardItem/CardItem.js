// import Img from "gatsby-image"
import React from 'react'
// import sal from "sal.js"

const CardItem = (props) => {
  // useEffect(() => {
  // sal({
  //   threshold: 1,
  //   once: true,
  //   disabled: false,
  // })
  // })

  const { image, name, summary } = props

  return (
    <div
      className='bg-white h-full shadow-sm rounded-md overflow-hidden hover:bg-blue-100'
      // data-sal={index!==0 ? "fade": ""} data-sal-duration="300"
    >
      <div className='bg-white-300'>
        <picture>
          <source srcset={image.srcSet} />
          <img
            loading='eager'
            className='hero-image'
            srcset={image.srcSet}
            src={image.src}
            alt={image.name}
            style={{
              width: '100%',
              height:
                props.cardLength && props.cardLength === '2'
                  ? '225px'
                  : '175px',
              objectFit: 'contain',
              objectPosition: 'center center'
            }}
          />
        </picture>
        {/* <Img
          fluid={image}
          className="card-image"
          style={{
            height:
              props.cardLength && props.cardLength === "2" ? "225px" : "175px",
          }}
          alt={name}
        /> */}
      </div>
      <div className='p-2 pb-4'>
        <h1 className='text-2xl  font-bold leading-snug'>{name}</h1>
        <p className='text-base text-blue-900 mb-1 font-medium'>{summary}</p>
      </div>
    </div>
  )
}

export default CardItem
