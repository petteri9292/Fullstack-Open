import axios from "axios"
import {useState,useEffect} from "react"

const RenderCountry = ({country}) => {

    const [countryData,setCountryData] = useState(null)

    useEffect(() => {
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`).then((response) => {
            setCountryData(response.data)
        })
    },[country])

    if (countryData){
        // console.log(countryData.languages)
        return (
            <div>
                <h1>{countryData.name.common}</h1>
                <div>capital {countryData.capital}</div>
                <div>area: {countryData.area}</div>

                <h3>languages:</h3>
                <ul>
                    {Object.values(countryData.languages).map((language,index) => (
                    <li key={index}>{language}</li>
                    ))}
                </ul>
                <img 
                    src={countryData.flags.png} 
                    alt={countryData.flags.alt || `Flag of ${countryData.name.common}`} 
                    style={{ width: '100px', height: 'auto' }} 
                />
            </div>
        )
    }
}

export default RenderCountry