import React,{useState,useEffect}from'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';


const CountryPicker=({handleContryChange})=>{
    const [fetchedCountries,setFecthedCountries]=useState([]);
   useEffect(()=>{
       const fetchAPI =async ()=>{
        setFecthedCountries(await fetchCountries());
       }
       fetchAPI();
   },[setFecthedCountries]); 

    return(
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleContryChange(e.target.value)}>
                <option value="global">global</option>
                {fetchedCountries.map((country,i)=> <option key={i} value={country}>{country} </option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;