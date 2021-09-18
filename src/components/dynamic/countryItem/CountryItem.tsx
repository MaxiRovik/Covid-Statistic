import React,  {FC} from 'react';
import {CountryInfo } from '../../../types/country';
import cl from './CountryItem.module.css'

interface CountryItemProps {
    countryName: string,
    thisCountry: any,
    number: number,
    totalConfirmed: number
    showCountryInfo: () => void,
    setSelectedCountryInfo: (value:CountryInfo) => void
}


const CountryItem: FC<CountryItemProps> = ({  countryName, number, thisCountry, totalConfirmed, showCountryInfo, setSelectedCountryInfo}) => {

    const countryInfo = {
        Country:thisCountry.Country,
        TotalDeaths: thisCountry.TotalDeaths,
        TotalRecovered: thisCountry.TotalRecovered,
        TotalConfirmed: thisCountry.TotalConfirmed,
    }

    const onCountryItem = (countryInfo:CountryInfo):void => {
        showCountryInfo();
        setSelectedCountryInfo(countryInfo)
    }

    return (
        <div className={cl.countryItemBlock}>
             <div className={cl.numberBlock}> {number} </div>
             <div
                 onClick = {()=>onCountryItem(countryInfo)} className ={cl.nameBlock}> {countryName} </div>
             <div className = {cl.totalConfirmBlock}> {totalConfirmed} </div>
        </div>
    );
};

export default CountryItem;