import React, { FC } from 'react';
import Magnifier from '../../../../UI/Magnifier.svg';
import cl from './Search.module.css'

interface SearchProps {
    value:string,
    setSearchValue:(searchValue:string)=> void
}

const Search:FC<SearchProps> = ({value, setSearchValue}) => {
    return (
        <div className = {cl.searchBlock}>
            <input value = {value}  onChange = {e => setSearchValue(e.target.value)} type = 'text'  placeholder = ' Search...' />
            <img src = {Magnifier} alt ="#"/>
        </div>
    );
};

export default Search;