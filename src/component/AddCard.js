import React from 'react'
import currencyRegion from '../utils/currencyRegion'

function Card({change}) {
  return (
    <div className='bg-white p-7'>
        <div className='flex flex-col'>
            <button>Add more currencies</button>
            <select onChange={change}>
              {Object.entries(currencyRegion).map((currency, index) => (
                <option key={index} value={currency[0]}>{currency[1]}</option>
              ))}
            </select>
        </div>
    </div>
  )
}

export default Card