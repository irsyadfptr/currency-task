import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import CurrencyData from '../utils/CurrencyData';


function CardList({rate, base, id, click, nominal}) {
  return (
    <>
        <div className="flex flex-col md:flex-row border-y border-slate-100">
            <div className='flex flex-col flex-grow items-center justify-between cursor-pointer p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]'>
                <div className="flex items-center text-center flex-col sm:flex-row sm:text-left">
                    <div className="mb-2.5 sm:mb-0 sm:mr-6">
                        <img className="w-14 h-10 shadow-xl object-cover" src={`https://countryflagsapi.com/png/${CurrencyData.CurrencyCountry[rate[0]]}`} alt={CurrencyData.CurrencyCountry[rate[0]]}/>
                    </div>
                    <div className="flex flex-col mb-4 sm:mb-0 sm:mr-4">
                        <h1 className='text-gray-900 font-semibold text-lg'>{rate[0]} - {CurrencyData.CurrencyRegion[rate[0]]}</h1>
                        <h1 className='text-gray-400 font-normal text-sm'>1 {base} = {rate[0]} {(rate[1]).toLocaleString('en-US', {maximumFractionDigits:3})}</h1>
                    </div>
                </div>
                <div className="mx-auto sm:ml-auto sm:mr-0">
                    <h1 className='text-gray-900 font-semibold text-xl'>{rate[0]} {(nominal * rate[1]).toLocaleString('en-US', {maximumFractionDigits:3})}</h1>
                </div>
            </div>
            <div className='flex p-4 sm:flex-row sm:py-4 sm:px-8 justify-center hover:bg-red-500 hover:cursor-pointer hover:text-white' onClick={click}>
                <button className='items-center'><MdDeleteOutline className='text-3xl'/></button>
            </div>
        </div>
    </>
  )
}

export default CardList