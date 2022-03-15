import React from 'react'
import currencyRegion from '../utils/currencyRegion'

function Header({symbol, input}) {
  return (
    <div className='flex flex-col p-5 border'>
        <div>
            <h3>{symbol} - {currencyRegion[symbol]}</h3>
        </div>
        <div>
            <div className='flex justify-between'>
                <h1>{symbol}</h1>
                <input placeholder='Add number here...' onChange={input} defaultValue={10}/>
            </div>
        </div>
    </div>
  )
}

export default Header