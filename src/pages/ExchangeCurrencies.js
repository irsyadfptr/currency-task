import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AddCard from '../component/AddCard'
import Card from '../component/Card'
import Header from '../component/Header'
import { addCurrency, addInput, addTotalId, deleteCurrency, loadCurrency, searchInput } from '../config/features/Currency'
import currencyRegion from '../utils/currencyRegion'

function ExchangeCurrencies() {

    const test = useSelector(state => state)
    const symbols = useSelector(state => state.currency.symbols)
    const arrSymbols = symbols.map(({symbol}) => symbol)
    const totalId = useSelector(state => state.currency.id)
    const base = useSelector(state => state.currency.data.base)
    const rates = useSelector(state => state.currency.data.rates)
    const inputan = useSelector(state => state.currency.input)
    const inputSearch = useSelector(state => state.currency.searchInput)

    const dispatch = useDispatch()
    const handleSelect = e => {
      dispatch(addTotalId());
      dispatch(addCurrency({id: totalId + 1, symbol: e.target.value}));
    }


    const handleDeleteClick = (i) => {
      console.log(symbols[i])
      dispatch(deleteCurrency(symbols[i]));
    }

    function handleChange(e) {
      dispatch(addInput(e.target.value));
    }

    function handleInput(e) {
      dispatch(searchInput(e.target.value));
      dispatch(addTotalId());
      dispatch(addCurrency({id: totalId + 1, symbol: e.target.value}));
    }

    // const handleInput = (e) => {
    //   dispatch(searchInput(e.target.value))
    //   console.log(e.target.value)
    // }

    useEffect(() => {
        dispatch(loadCurrency(symbols));
    }, [dispatch, symbols,])



  return (
    <div>
        <Header symbol={base} input={handleChange}/>
        {rates && Object.entries(rates).map((rate, index) => (
          <div key={index}>
            <Card id={index} rate={rate} base={base} click={() => handleDeleteClick(index)} nominal={inputan}/>
          </div>
        ))}
        <AddCard change={handleSelect} filter={arrSymbols} handleInput={handleInput} input={inputSearch}/>
    </div>
  )
}


export default ExchangeCurrencies;