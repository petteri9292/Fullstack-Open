import RenderCountry from "./RenderCountry"
import {useState, useEffect} from "react"


const RenderList = ({countries, searchTerm}) => { 
    const [selectedCountry, setSelectedCountry] = useState(null);

    const searchedCountries = countries.filter((country) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        setSelectedCountry(null);
      }, [searchTerm]);
    

    const handleShowCountry = (country) => {
        setSelectedCountry(country);
    };

    if (selectedCountry !== null){
        return <RenderCountry country = {selectedCountry}></RenderCountry>
    }

    if (searchedCountries.length >= 10){
        return <>Too many matches, specify another filter</>
    }
    if (searchedCountries.length < 10 && searchedCountries.length > 1){
        return <>{searchedCountries.map((country,index) => <div key = {index}>{country}
            <button onClick={() => handleShowCountry(country)}>show</button>
        </div>)}</>
    }    
    if (searchedCountries.length === 1 ) {
        const countryToRender = searchedCountries[0];

        return <RenderCountry country={countryToRender} />;
    }



}

export default RenderList