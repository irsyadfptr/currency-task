import React from 'react'

function Header() {
  return (
    <div className='flex flex-col p-5 border'>
        <div>
            <h3>USD - United States Dollars</h3>
        </div>
        <div>
            <div className='flex justify-between'>
                <h1>USD</h1>
                <h1>10.000</h1>
            </div>
        </div>
    </div>
  )
}

export default Header