import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Weather from './Weather'

const CountriesWrite = ({setSearchWord,showCountries}) => {
    if (showCountries.length === 1) {
      return (
        <div><h1>{showCountries[0].name.common}</h1>
        <div>capital {showCountries[0].capital.toString()}</div>
        <div>area {showCountries[0].area.toString()}</div>
        <div><h3>languages</h3>
          <ul>
          {Object.values(showCountries[0].languages).map(
            language => <li key={language}>{language}</li>
          )}
          </ul>
        <div>
        <img alt="title" src={showCountries[0].flags.png} height="100" width="100" />
        </div>
        <div><Weather/></div>
        <h3>Weather in {showCountries[0].capital.toString()}</h3>
        <p>temperature</p>
        <p>wind</p>
        </div>
        </div>
      )
    }
    else if(showCountries.length<=10)
    {
      return(
        <div>
          {showCountries.map((countries)=><div key={countries.name.common}>{countries.name.common}
           <button type="button" value={countries.name.common} onClick={() => setSearchWord(countries.name.common)}>show</button></div>)}
          </div>
      )
    }
    else{
      return (
        <div>
       Too many matches
        </div>
      )
    }
  }

  export default CountriesWrite