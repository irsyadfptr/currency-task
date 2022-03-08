import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AddCard from '../component/AddCard'
import Card from '../component/Card'
import Header from '../component/Header'
import { loadCurrency } from '../config/features/Currency'

function ExchangeCurrencies() {


    const test = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(test)

    useEffect(() => {
        dispatch(loadCurrency());
    }, [dispatch])

  return (
    <div>
        <Header/>
        <Card/>
        <AddCard/>
    </div>
  )
}

export default ExchangeCurrencies;