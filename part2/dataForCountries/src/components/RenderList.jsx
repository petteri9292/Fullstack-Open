import RenderCountry from "./RenderCountry"

const RenderList = ({countries, searchTerm}) => { 
    const searchedCountries = countries.filter((country) => country.toLowerCase().includes(searchTerm.toLowerCase()))
    // console.log(searchedCountries)

    if (searchedCountries.length >= 10){
        return <>Too many matches, specify another filter</>
    }
    if (searchedCountries.length < 10 && searchedCountries.length > 1){
        return <>{searchedCountries.map((country,index) => <div key = {index}>{country}</div>)}</>
    }    
    if (searchedCountries.length === 1){
        console.log(searchedCountries)
        return <RenderCountry country = {searchedCountries[0]}></RenderCountry>
    }
}

export default RenderList