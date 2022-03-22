import React from 'react'
import CurrencyData from '../utils/CurrencyData'


function Header({symbol, input, nominal}) {
  // const reg = new RegExp("^[0-9]{0,5}(?:[.][0-9]{0,5})?$")
  // const isValid = reg.test(nominal);


  // isValid ? console.log("benar") : console.log("input salah ni")

  return (
    <div className='flex flex-col p-3 border sticky top-0 bg-white'>
        <div className='flex justify-center'>
            <h3 className='text-4xl'>{symbol} - {CurrencyData.CurrencyRegion[symbol]}</h3>
        </div>
        <div>
            <div className='flex justify-center py-2 space-x-4 align-center'>
              <input type='number' min={0} onChange={input} defaultValue={10} className="text-xl w-24 p-2 text-center border-2 border-slate-800"/>
              <h1 className='text-2xl p-2'>{symbol}</h1>
            </div>
        </div>
    </div>
  )
}

export default Header