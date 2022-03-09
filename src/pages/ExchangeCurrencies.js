import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AddCard from '../component/AddCard'
import Card from '../component/Card'
import Header from '../component/Header'
import { addCurrency, loadCurrency } from '../config/features/Currency'

function ExchangeCurrencies() {


    const test = useSelector(state => state)
    const symbols = useSelector(state => state.currency.symbols)
    const base = useSelector(state => state.currency.data.base)
    const rates = useSelector(state => state.currency.data.rates)
    const dispatch = useDispatch()
    console.log(rates)

    const handleSelect = e => {
      dispatch(addCurrency(e.target.value));
  }

    useEffect(() => {
        dispatch(loadCurrency(symbols));
    }, [dispatch, symbols])

  return (
    <div>
        <Header symbol={base}/>
        {rates && Object.entries(rates).map((rate, index) => (
          <div key={index}>
            <Card rate={rate} base={base}/>
          </div>
        ))}
        <AddCard change={handleSelect}/>
    </div>
  )
}


export default ExchangeCurrencies;