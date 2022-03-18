import React from 'react'
import CurrencyRegion from '../utils/CurrencyRegion'
import './CardInject.scss'
import { MdDeleteOutline } from "react-icons/md";

function Card({rate, base, id, click, nominal}) {
  return (
    <div className='bg-white pt-5 lg:px-36 md:px-32 px-10'>
        <div className='flex flex-col md:flex-row border-2 border-black rounded-xl'>
            <div className='flex flex-grow flex-col items-center md:flex-row justify-between py-10'>
                <div className='order-2 md:order-1'>
                    <h3 className='p-2'>{rate[0]} - {CurrencyRegion[rate[0]]}</h3>
                    <h3 className='p-2'>1 {base} = {rate[0]} {rate[1]}</h3>
                </div>
                <div className='flex flex-row items-center px-10 text-2xl order-1 md:order-2'>
                    <div className='p-2 font-bold'><h1>{rate[0]}</h1></div>
                    <div className='p-2 font-semibold'><h1>{(nominal * rate[1]).toFixed(3)}</h1></div>
                </div>
            </div>

            <div className='flex justify-center bg-red-500 card-border p-2 hover:bg-red-400'>
                <button className='items-center' onClick={click}><MdDeleteOutline className='text-3xl m-1'/></button>
            </div>
        </div>
    </div>
  )
}

export default Card