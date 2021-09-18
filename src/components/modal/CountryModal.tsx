import React, {FC} from 'react';
import CountryInfoBlock from './modalInfo/CountryInfoBlock';
import cl from './CountryModal.module.css'
import { CountryInfo } from '../../types/country';


interface CountryModalProps {
    visible: boolean
    notVisible: () => void
    selectedCountryInfo: CountryInfo
}

const CountryModal: FC<CountryModalProps> = ({visible, notVisible, selectedCountryInfo}) => {
    const CountryName = selectedCountryInfo.Country
    const TotalDeaths = selectedCountryInfo.TotalDeaths
    const TotalRecovered = selectedCountryInfo.TotalRecovered
    const TotalConfirmed = selectedCountryInfo.TotalConfirmed

    const rootClasses = [cl.modal]
    if(visible===true) {
        rootClasses.push(cl.active)
    }
    return (
        <div
            onClick = {notVisible} className = {rootClasses.join(' ')}>
            <CountryInfoBlock  notVisible = {notVisible}
                               CountryName = {CountryName}
                               TotalDeaths = {TotalDeaths}
                               TotalRecovered = {TotalRecovered}
                               TotalConfirmed = {TotalConfirmed}/>
        </div>
    );
};

export default CountryModal;