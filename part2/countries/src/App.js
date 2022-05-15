import { useState, useEffect } from 'react'
import axios from 'axios'
import CountriesWrite from './components/CountriesWrite'

const App = () => {
  const [countries,setCountries] = useState([])
  const [searchWord,setSearchWord] = useState('')
  const hook = () => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  }
  useEffect(hook,[])
  const showCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchWord.toLowerCase()))
  console.log(showCountries)
  const handleSearchChange = (event) => {
    setSearchWord(event.target.value)
  }
  return (
    <div>
    <div>
      find countries <input value={searchWord} onChange={handleSearchChange}/>
    </div>
    <CountriesWrite showCountries={showCountries} setSearchWord={setSearchWord}/>
    </div>
  )
}
export default App