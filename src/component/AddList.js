import React from 'react'
import CurrencyData from '../utils/CurrencyData';

function AddList({change, filter, input, handleInput, toggleValue, toggleButton}) {

    const filtered = Object.keys(CurrencyData.CurrencyRegion)
    .filter(key => !filter.includes(key))
    .reduce((obj, key) => {
      obj[key] = CurrencyData.CurrencyRegion[key];
      return obj;
    }, {});

  return (
    <div className='flex flex-col bg-gray-400 text-white rounded-b-lg'>
        {toggleValue ?
        <button className="p-4 hover:bg-blue-400 hover:text-gray-100 rounded-b-lg font-semibold"
        onClick={toggleButton}>
            ADD MORE
        </button>
        :
        <>
            <input className='m-0.5 p-3.5 rounded-b-lg text-black'
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
        </>
    }</div>
  )
}

// className='block w-full mx-auto py-4 px-4 text-center no-underline rounded-b-lg hover:bg-blue-200 [#f6f8f9] font-medium duration-300'

export default AddList