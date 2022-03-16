import React from 'react'
import currencyRegion from '../utils/currencyRegion'
import { MdDeleteOutline } from "react-icons/md";

function Card({rate, base, id, click, nominal}) {
  return (
    <div className='bg-white pt-5 px-36'>
        <div className='flex bg-red-200 p-5 py-7 rounded-xl'>
            <div className='flex-grow'>
                <h3>{rate[0]} - {currencyRegion[rate[0]]}</h3>
                <h3>1 {base} = {rate[0]} {rate[1]}</h3>
            </div>
            <div className='flex flex-row items-center px-10 text-2xl'>
                <div className='px-2'><h1>{rate[0]}</h1></div>
                <div><h1>{nominal * rate[1]}</h1></div>
            </div>
            <div className='flex'>
                <button className='items-center' onClick={click}><MdDeleteOutline className='text-3xl'/></button>
            </div>
        </div>
    </div>
  )
}

export default Card