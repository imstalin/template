import React from 'react'
import './Dimensions.css'
const Dimensions = () => {
  return (
    <div>
      <div class='measurement-container'>
        <div>
          <table>
            <tr>
              <td class='measurement-spechead' colSpan='2'>
                Colour/ Finish
              </td>
            </tr>
            <tr>
              <td class='measurement-key'>Black</td>
              <td></td>
            </tr>
            <tr class='measurement-seperator'>
              {' '}
              <td colSpan='2'></td>{' '}
            </tr>
            <tr>
              <td class='measurement-spechead' colSpan='2'>
                Dimensions
              </td>
            </tr>
            <tr>
              <td class='measurement-key'>Depth</td>
              <td>76mm</td>
            </tr>
            <tr>
              <td class='measurement-key'>Height</td>
              <td>569mm</td>
            </tr>
            <tr>
              <td class='measurement-key'>Width</td>
              <td>969mm</td>
            </tr>
            <tr class='measurement-seperator'>
              {' '}
              <td colSpan='2'></td>{' '}
            </tr>
          </table>
        </div>

        <div>
          <picture></picture>
        </div>
      </div>
    </div>
  )
}

export default Dimensions
