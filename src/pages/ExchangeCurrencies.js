import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AddList from '../component/AddList'
import CardList from '../component/CardList'
import HeaderList from '../component/HeaderList'
import Spinner from '../component/Spinner'
import useOutsideClick from '../config/custom/useOutsideClick'
import { addCurrency, addInput, addTotalId, deleteCurrency, loadCurrency, searchInput, toogling } from '../config/features/Currency'

function ExchangeCurrencies() {

    // const symbols = useSelector(state => state.currency.symbols)
    // const totalId = useSelector(state => state.currency.id)
    // const base = useSelector(state => state.currency.base)
    // const rates = useSelector(state => state.currency.rates)
    // const inputCurrency = useSelector(state => state.currency.input)
    // const inputSearch = useSelector(state => state.currency.searchInput)
    // const loading = useSelector(state => state.currency.loading)

    const [symbols, totalId, base, rates, inputCurrency, inputSearch, loading, toggle] = useSelector((state) => [
      state.currency.symbols,
      state.currency.id,
      state.currency.base,
      state.currency.rates,
      state.currency.input,
      state.currency.searchInput,
      state.currency.loading,
      state.currency.toggle
    ])

    const arrSymbols = symbols.map(({symbol}) => symbol)
    // let [toggle, setToggle] = useState(true)

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
    }

    const handleSelect = (e) => {
    }

    const handleToggle = () => { 
      dispatch(toogling(!toggle))
      dispatch(searchInput(''))
    }

    const ref = useRef();

    useOutsideClick(ref, () => {
      if (toggle === false){
        dispatch(toogling(true))
      }
    });


    useEffect(() => {
      dispatch(loadCurrency(symbols));
    }, [symbols])



  return (
    <div>
        {loading ? (
          <Spinner/>
      ) : (
        <>
          <div className='flex flex-col items-center justify-center min-h-screen p-5 md:p-16 bg-slate-200'>
              <div className='w-full max-w-4xl mx-auto bg-white rounded-xl shadow-xl flex flex-col pt-4'>
                  <HeaderList symbol={base} input={handleChange} nominal={inputCurrency}/>
                  {Object.entries(rates).map((rate, index) => (
                    <div key={index} className='py-8 md:p-0'>
                      <CardList id={index} rate={rate} base={base} click={() => handleDeleteClick(index)} nominal={inputCurrency}/>
                    </div>
                  ))}
                  <div ref={ref} className='block w-full mx-auto text-center no-underline rounded-b-lg'>
                    <AddList select={handleSelect} filter={arrSymbols} handleInput={handleInput} input={inputSearch} toggleButton={handleToggle} toggleValue={toggle}/>
                  </div>
              </div>
          </div>
        {/* <div ref={ref}>
          <AddCard select={handleSelect} filter={arrSymbols} handleInput={handleInput} input={inputSearch} toggleButton={handleToggle} toggleValue={toggle}/>
        </div> */}
        </>
      )}
    </div>
  )
}


export default ExchangeCurrencies;