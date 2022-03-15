import React from 'react'
import currencyRegion from '../utils/currencyRegion'

function Card({rate, base, id, click}) {
    console.log(id)
  return (
    <div className='bg-white p-7'>
        <div className='flex bg-red-200 p-5'>
            <div className='flex flex-col flex-grow'>
                <div className='flex justify-between'>
                    <div><h1>{rate[0]}</h1></div>
                    <div><h1>{rate[1]}</h1></div>
                </div>
                <h3>{rate[0]} - {currencyRegion[rate[0]]}</h3>
                <h3>1 {base} = {rate[0]} {rate[1]}</h3>
            </div>
            <div className='flex'>
                <button className='items-center' onClick={click}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Card