import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AddCard from '../component/AddCard'
import Card from '../component/Card'
import Header from '../component/Header'
import Spinner from '../component/Spinner'
import useOutsideClick from '../config/custom/useOutsideClick'
import { addCurrency, addInput, addTotalId, deleteCurrency, loadCurrency, searchInput } from '../config/features/Currency'

function ExchangeCurrencies() {

    // const symbols = useSelector(state => state.currency.symbols)
    // const totalId = useSelector(state => state.currency.id)
    // const base = useSelector(state => state.currency.base)
    // const rates = useSelector(state => state.currency.rates)
    // const inputCurrency = useSelector(state => state.currency.input)
    // const inputSearch = useSelector(state => state.currency.searchInput)
    // const loading = useSelector(state => state.currency.loading)

    const [symbols, totalId, base, rates, inputCurrency, inputSearch, loading] = useSelector((state) => [
      state.currency.symbols,
      state.currency.id,
      state.currency.base,
      state.currency.rates,
      state.currency.input,
      state.currency.searchInput,
      state.currency.loading
    ])

    const arrSymbols = symbols.map(({symbol}) => symbol)
    let [toggle, setToggle] = useState(true)

    const dispatch = useDispatch()

    const handleDeleteClick = (i) => {
      dispatch(deleteCurrency(symbols[i]));
    }

    const handleChange = (e) => {
      dispatch(addInput(e.target.value));
    }

    const handleInput = (e) => {
      dispatch(searchInput(e.target.value));
      dispatch(addTotalId());
      dispatch(addCurrency({id: totalId + 1, symbol: e.target.value}));
      console.log(e.target.value)
      console.log(symbols)
    }

    const handleSelect = (e) => {
    }

    const handleToggle = () => { 
      setToggle(!toggle)
      dispatch(searchInput(''))
    }

    const ref = useRef();

    useOutsideClick(ref, () => {
      if (toggle === false){
        setToggle(true)
      }
    });


    useEffect(() => {
      dispatch(loadCurrency(symbols));
    }, [dispatch, symbols])



  return (
    <div>
        {loading ? (
          <Spinner/>
      ) : (
        <>
        <Header symbol={base} input={handleChange} nominal={inputCurrency}/>
                {Object.entries(rates).map((rate, index) => (
                  <div key={index}>
                    <Card id={index} rate={rate} base={base} click={() => handleDeleteClick(index)} nominal={inputCurrency}/>
                  </div>
                ))}
        <div ref={ref}>
          <AddCard select={handleSelect} filter={arrSymbols} handleInput={handleInput} input={inputSearch} toggleButton={handleToggle} toggleValue={toggle}/>
        </div>
        </>
      )}

    </div>
  )
}


export default ExchangeCurrencies;