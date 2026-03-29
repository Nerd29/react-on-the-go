import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({fetchCountries}) => {
    const [visitedFlag,setVisitedFlag] = useState([])

    const handleAddFlag=(flag)=>{
        console.log('Flag needs to be added',flag)
        const newFlag=[...visitedFlag,flag]
        setVisitedFlag(newFlag)
    }

    const countriesData=use(fetchCountries);//pura api er data dhukse
    const countries=countriesData.countries //api er data theke countries data gula nilam
    console.log(countries)
    return (
        <div>
            <h1>In the Countries :{countries.length}</h1>
            <h2>Total Countries Visited : {visitedFlag.length}</h2>

            <div className='visitedFlag'>
                {
                    visitedFlag.map(flag=><img src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                countries.map(country=> <Country country={country} handleAddFlag={handleAddFlag} ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;