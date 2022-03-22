import React from 'react'
import CurrencyData from '../../utils/CurrencyData';

function Card({change, filter, input, handleInput, toggleValue, toggleButton}) {

  const filtered = Object.keys(CurrencyData.CurrencyRegion)
  .filter(key => !filter.includes(key))
  .reduce((obj, key) => {
    obj[key] = CurrencyData.CurrencyRegion[key];
    return obj;
  }, {});
  

  return (
    <div className='bg-white p-3 lg:px-36 md:px-32 px-10'>
        <div className='flex flex-col'>
            {/* <select onChange={change}>
              {Object.entries(filtered).map((currency, index) => (
                <option key={index} value={currency[0]}>{currency[1]}</option>
              ))}
            </select> */}
            {toggleValue ? 
            <button className='py-4 px-5 border-2 border-black rounded-xl bg-red-500 hover:bg-red-400' onClick={toggleButton}>Add more currencies</button>
            : 
            <>
              <input className='py-4 px-5 border-2 border-black rounded-xl'
                list="datas"
                onChange={handleInput}
                required
                value={input}
                placeholder="Add new currency..."
              />
              <datalist id="datas" >
                {Object.entries(filtered).map((currency, index) => (
                    <option key={index} value={currency[0]}>{currency[1]}</option>
                  ))}
              </datalist>
            </>}
            
        </div>
    </div>
  )
}

export default Card