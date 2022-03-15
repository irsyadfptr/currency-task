import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AddCard from '../component/AddCard'
import Card from '../component/Card'
import Header from '../component/Header'
import { addCurrency, addTotalId, deleteCurrency, loadCurrency } from '../config/features/Currency'

function ExchangeCurrencies() {


    const test = useSelector(state => state)
    const symbols = useSelector(state => state.currency.symbols)
    const totalId = useSelector(state => state.currency.id)
    const base = useSelector(state => state.currency.data.base)
    const rates = useSelector(state => state.currency.data.rates)
    const id = useSelector(state => state.currency.symbols)
    const dispatch = useDispatch()
    console.log(test)

    const handleSelect = e => {
      dispatch(addTotalId());
      dispatch(addCurrency({id: totalId + 1, symbol: e.target.value}));
    }


    const handleDeleteClick = (i) => {
      console.log(symbols[i])
      dispatch(deleteCurrency(symbols[i]));
    }

    useEffect(() => {
        dispatch(loadCurrency(symbols));
    }, [dispatch, symbols])

    

  return (
    <div>
        <Header symbol={base}/>
        {rates && Object.entries(rates).map((rate, index) => (
          <div key={index}>
            <Card id={index} rate={rate} base={base} click={() => handleDeleteClick(index)}/>
          </div>
        ))}
        <AddCard change={handleSelect}/>
    </div>
  )
}


export default ExchangeCurrencies;