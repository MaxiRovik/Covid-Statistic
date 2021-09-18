import React, {FC} from 'react';
import coronaImg from '../../../UI/CovidLogo.svg'
import Search from './searchInput/Search';
import cl from "./PageHeader.module.css"

interface SearchProps {
    query:string,
    setQuery:(value:string) => void,
}

const PageHeader:FC<SearchProps> = ({ query, setQuery }) => {
    return (
        <div className={cl.pageHeader}>
            <div>
                <img src={coronaImg} alt='#'/>
            </div>
            <div className={cl.pageName}>
         STATISTIC
            </div>
            <Search value = {query} setSearchValue = {setQuery}/>
        </div>
    );
};

export default PageHeader;