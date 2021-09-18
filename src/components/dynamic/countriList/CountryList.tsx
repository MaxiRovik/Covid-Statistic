import React, {FC, useEffect} from 'react';
import {fetchCountriesData} from "../../../store/actionCreator/countryData";
import {useDispatch} from "react-redux";
import CountryItem from "../countryItem/CountryItem";
import {useTypeSelector} from "../../../typedHook/useTypedSelector";
import {useCountryItems} from "../../../customHook/useCountryItem";
import {CountryInfo} from "../../../types/country";


interface CountryListProps {
    showCountryInfo: () => void,
    setSelectedCountryInfo: (value:CountryInfo)  => void,
    kindOfSort: string,
    query: string
}

const CountryList:FC<CountryListProps> = ({showCountryInfo, setSelectedCountryInfo, kindOfSort, query}) => {
    const {countries, error, loading} = useTypeSelector(state => state)
    const dispatch = useDispatch();

    const sortedAndSearchedCountryItems = useCountryItems(countries, kindOfSort, query)

    useEffect(() => {
        dispatch(fetchCountriesData())
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error)
        return <h1>{error}</h1>

    return (
        <div>
            {sortedAndSearchedCountryItems.map((country:{Country:string,TotalConfirmed:number})=>
                <CountryItem key={country.Country}
                             thisCountry = {country}
                             number ={countries.indexOf(country)+1}
                             countryName = {country.Country}
                             totalConfirmed ={country.TotalConfirmed}
                             showCountryInfo = {showCountryInfo}
                             setSelectedCountryInfo={setSelectedCountryInfo}
                />
            )}
        </div>
    )
};
export default CountryList