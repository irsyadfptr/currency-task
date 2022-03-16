import React from 'react'
import currencyRegion from '../utils/currencyRegion'

function Card({change, filter, input, handleInput}) {

  const filtered = Object.keys(currencyRegion)
  .filter(key => !filter.includes(key))
  .reduce((obj, key) => {
    obj[key] = currencyRegion[key];
    return obj;
  }, {});

  return (
    <div className='bg-white p-3 sticky bottom-0'>
        <div className='flex flex-col px-32'>
            {/* <button>Add more currencies</button> */}
            {/* <select onChange={change}>
              {Object.entries(filtered).map((currency, index) => (
                <option key={index} value={currency[0]}>{currency[1]}</option>
              ))}
            </select> */}

            <input className='py-4 px-5 border-2 border-black rounded-xl'
              list="datas"
              onChange={handleInput}
              required
              value={input}
            />
            <datalist id="datas" onChange={change}>
              {Object.entries(filtered).map((currency, index) => (
                  <option key={index} value={currency[0]}>{currency[1]}</option>
                ))}
            </datalist>
            
        </div>
    </div>
  )
}

export default Card