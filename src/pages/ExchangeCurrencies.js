import axios from 'axios'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AddCard from '../component/AddCard'
import Card from '../component/Card'
import Header from '../component/Header'
import useOutsideClick from '../config/custom/useOutsideClick'
import { addCurrency, addInput, addTotalId, deleteCurrency, loadCurrency, searchInput } from '../config/features/Currency'

function ExchangeCurrencies() {

    const test = useSelector(state => state)
    const symbols = useSelector(state => state.currency.symbols)
    const arrSymbols = symbols.map(({symbol}) => symbol)
    const totalId = useSelector(state => state.currency.id)
    const base = useSelector(state => state.currency.data.base)
    const rates = useSelector(state => state.currency.data.rates)
    const inputCurrency = useSelector(state => state.currency.input)
    const inputSearch = useSelector(state => state.currency.searchInput)

    let [toggle, setToggle] = useState(true)

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

    const handleToggle = () => { 
      setToggle(!toggle) 
    }

    const ref = useRef();

    useOutsideClick(ref, () => {
      if (toggle === false){
        setToggle(true)
      }
    });

    useEffect(() => {
        dispatch(loadCurrency(symbols));
    }, [dispatch, symbols,])



  return (
    <div>
        <Header symbol={base} input={handleChange} nominal={inputCurrency}/>
        {rates && Object.entries(rates).map((rate, index) => (
          <div key={index}>
            <Card id={index} rate={rate} base={base} click={() => handleDeleteClick(index)} nominal={inputCurrency}/>
          </div>
        ))}
        <div ref={ref}>
          <AddCard change={handleSelect} filter={arrSymbols} handleInput={handleInput} input={inputSearch} toggleButton={handleToggle} toggleValue={toggle}/>
        </div>
    </div>
  )
}


export default ExchangeCurrencies;