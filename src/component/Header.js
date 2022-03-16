import React from 'react'
import currencyRegion from '../utils/currencyRegion'

function Header({symbol, input}) {
  return (
    <div className='flex flex-col p-7 border sticky top-0 bg-white'>
        <div className='flex justify-center'>
            <h3 className='text-4xl'>{symbol} - {currencyRegion[symbol]}</h3>
        </div>
        <div>
            <div className='flex justify-center py-2 space-x-4 align-center'>
              <input onChange={input} defaultValue={10} className="text-xl w-24 p-2 text-center border-2 border-slate-800"/>
              <h1 className='text-2xl p-2'>{symbol}</h1>
            </div>
        </div>
    </div>
  )
}

export default Header