import React, { useState } from 'react';
import './country.css'

const Country = ({country,handleAddFlag,handleAddCountries}) => {
    const [visited,setVisited] = useState(false)

    const handleVisit=()=>{
        setVisited(visited ? false : true)


       handleAddCountries(country);
    }


    console.log(country.name.common)
    return (
        <div className={`country ${visited? 'country-visited':'country-not-visted'} ${visited?'country-name':'no-country-name'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h2>Name : {country.name.common}</h2>
            <h2>Capital :{country.capital.capital}</h2>
            <p>Population : {country.population.population}
              
            </p>
            <p>Area : {country.area.area} {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
            <p>region : {country.region.region}</p>
            <button className='btn' onClick={handleVisit}>{visited ? "Visited" : "Not Visited"}</button>
            <button className='btn'onClick={()=>{handleAddFlag(country?.flags?.flags?.png)}}>Add Visited Flags</button>
        </div>
    );
};

export default Country;