import React from 'react'
import CurrencyData from '../utils/CurrencyData'

function HeaderList({symbol, input}) {
  return (
    <>
        <div className='flex flex-col p-4 justify-between sm:py-4 sm:px-8 sticky top-0 bg-white'>
            <div className='text-center mb-10 md:m-0 text-3xl font-bold'><h1>Euro Converter</h1></div>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <h1 className='font-semibold text-xl'>{symbol} - {CurrencyData.CurrencyRegion[symbol]}</h1>
                <div className='relative z-0 px-2'>
                    <label 
                    className='font-mono uppercase font-bold text-[11px]  text-gray-900 dark:text-gray-300
                    bg-white relative px-1 top-2 left-3 w-auto group-focus-within:text-red-600'>
                    Currency</label>
                    <input type="number" min={0} onChange={input} defaultValue={10}
                    className='h-8 text-10  bg-gray-50 border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderList