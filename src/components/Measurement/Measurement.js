// import Img from "gatsby-image"
import * as React from 'react'
// import sal from 'sal.js'
import './measurement.css'
const Measurement = (props) => {
  const { data, layout, specs } = props
  let specsData = specs
  const {
    dimensionData: { dimensions, imageURL }
  } = data
  let dimensionObj = {}
  dimensions.forEach((dimension) => {
    if (dimension['Height']) {
      dimensionObj['Height'] = dimension['Height']
    } else if (dimension['Width']) {
      dimensionObj['Width'] = dimension['Width']
    } else if (dimension['Depth']) {
      dimensionObj['Depth'] = dimension['Depth']
    }
  })
  console.log('---------->', dimensionObj)
  let firstorder = ''
  let secondorder = ''
  if (layout === 'left') {
    firstorder = 'first order1'
    secondorder = 'second order2'
  } else {
    firstorder = 'first order2'
    secondorder = 'second order1'
  }

  const SpecValue = specsData.filter(
    (spec) => spec.name.toLowerCase() === 'Colour / Finish'.toLocaleLowerCase()
  )

  return (
    <div>
      {imageURL && dimensions.length > 0 ? (
        <div className='container addBorder'>
          <h1 className='text-center text-2xl addTopMargin font-bold'>
            Dimensions
          </h1>

          <div className='measurement-container'>
            <div className={firstorder}>
              <table>
                <tbody>
                  <tr>
                    <td className='key'>Colour</td>
                    <td>{SpecValue.length > 0 ? SpecValue[0].value : ''}</td>
                  </tr>
                  {Object.keys(dimensionObj).map((dimensionKey) => {
                    return (
                      <tr key={dimensionKey}>
                        <td className='key'>{dimensionKey}</td>
                        <td>{dimensionObj[dimensionKey]} mm</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className={secondorder}>
              <picture>
                <source srcSet={imageURL.srcSet} sizes={imageURL.sizes} />
                <img
                  className='product-image-right'
                  sizes={imageURL.sizes}
                  srcSet={imageURL.srcSet}
                  src={imageURL.src}
                  alt={data.Product_Name}
                  style={{ width: '100%' }}
                />
              </picture>
              {/* <img className="product-image-right" src={data.Image_url.src}
          alt={data.Product_Name}
        />  */}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Measurement
