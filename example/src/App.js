import React from 'react'

import '../node_modules/normalize.css'
import 'template/example/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'template/dist/index.css'

const App = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>Iamge</div>
          <div className='col-sm-12 col-md-6'>
            <h3>Card Example</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <h3>Card Example</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <CardComponent></CardComponent>
          </div>
          <div className='col-sm-3'>
            <CardComponent></CardComponent>
          </div>
          <div className='col-sm-3'>
            <CardComponent></CardComponent>
          </div>
          <div className='col-sm-3'>
            <CardComponent></CardComponent>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
