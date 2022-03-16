import React from 'react'
import currencyRegion from '../utils/currencyRegion'

function Card({change, filter}) {

  const filtered = Object.keys(currencyRegion)
  .filter(key => !filter.includes(key))
  .reduce((obj, key) => {
    obj[key] = currencyRegion[key];
    return obj;
  }, {});
  

  console.log(filtered)

  return (
    <div className='bg-white p-7'>
        <div className='flex flex-col'>
            <button>Add more currencies</button>
            <select onChange={change}>
              {Object.entries(filtered).map((currency, index) => (
                <option key={index} value={currency[0]}>{currency[1]}</option>
              ))}
            </select>
        </div>
    </div>
  )
}

export default Card