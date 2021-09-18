import React, {FC} from 'react';
import ModalInfoRow from "./ModalInfoRow";
import cl from "./CountryInfoBlock.module.css"

interface CountryInfoBlockProps {
    notVisible: () => void
    CountryName: string,
    TotalDeaths: number,
    TotalRecovered: number,
    TotalConfirmed: number
}

const CountryInfoBlock: FC<CountryInfoBlockProps> = ({notVisible, CountryName, TotalDeaths, TotalRecovered, TotalConfirmed}) => {

    return (
        <div className = {cl.modalContent}
        onClick = {(e) => e.stopPropagation()}>
            <div className = {cl.modalCountryName}>
                <span>{CountryName}</span>
            </div>
            <ModalInfoRow  TotalConfirmed = {TotalConfirmed} TotalDeaths = {TotalDeaths} TotalRecovered = {TotalRecovered}/>
            <button onClick = {notVisible}
                    className = {cl.modalButton}>
                OK
            </button>
        </div>
    );
};

export default CountryInfoBlock;