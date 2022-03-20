import React from 'react'
import './CardInject.scss'
import { MdDeleteOutline } from "react-icons/md";
import CurrencyData from '../utils/CurrencyData';

function Card({rate, base, id, click, nominal, imageLoad}) {

  return (
    <div className='bg-white pt-5 lg:px-36 md:px-32 px-10'>
        <div className='flex flex-col md:flex-row border-2 border-black rounded-xl'>
            <div className='flex flex-grow flex-col items-center md:flex-row justify-between py-10'>
                <div className='order-1 md:order-1 text-center md:text-left mb-10 md:m-0 md:ml-5'>
                    <div className='flex items-center flex-col md:flex-row'>
                        <div className="border-2 border-gray-800 rounded-full h-12 w-12">    
                            <img className='h-full w-full rounded-full' onLoad={imageLoad} src={`https://countryflagsapi.com/png/${CurrencyData.CurrencyCountry[rate[0]]}`} alt={CurrencyData.CurrencyCountry[rate[0]]} />
                        </div>
                        <div>
                            <h3 className='p-2 py-0.5 items-center font-semibold text-xl'>{rate[0]} - {CurrencyData.CurrencyRegion[rate[0]]}</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center px-8 text-2xl order-2 md:order-2'>
                    <div className='p-2 py-0 font-semibold flex'>
                        <h1>{rate[0]} {(nominal * rate[1]).toFixed(3)}</h1>
                    </div>
                    <h3 className='p-2 py-0.5 text-lg'>1 {base} = {rate[0]} {rate[1].toFixed(3)}</h3>
                </div>
            </div>

            <div className='flex justify-center bg-red-500 card-border p-2 hover:bg-red-400' onClick={click}>
                <button className='items-center'><MdDeleteOutline className='text-3xl m-1'/></button>
            </div>
        </div>
    </div>
  )
}

export default Card