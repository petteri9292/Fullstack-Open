import { useEffect, useState } from 'react'
import axios from "axios"
import RenderList from "./components/RenderList"


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        const countryNames = response.data.map((country) => country.name.common);
        setCountries(countryNames);
        // console.log(countryNames);
      })
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }


  return (
    
    <div>
      <p>find countries <input onChange={handleSearchChange}></input></p>
      <RenderList countries={countries} searchTerm={searchTerm}></RenderList>
    </div>
  )
}

export default App
