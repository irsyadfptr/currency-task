import React from 'react'

function Card() {
  return (
    <div className='bg-white p-7'>
        <div className='flex bg-red-200 p-5'>
            <div className='flex flex-col flex-grow'>
                <div className='flex justify-between'>
                    <div><h1>IDR</h1></div>
                    <div><h1>150,000.50</h1></div>
                </div>
                <h3>EUR - EURO</h3>
                <h3>Convertion Rate</h3>
            </div>
            <div className='flex'>
                <button className='items-center'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Card