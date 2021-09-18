import React, { useState } from 'react';
import CountryList from './components/dynamic/countriList/CountryList'
import PageHeader from "./components/static/pageHeader/PageHeader";
import TableHeader from "./components/static/tableHeader/TableHeader";
import cl from './App.module.css'
import CountryModal from "./components/modal/CountryModal";
import {CountryInfo} from "./types/country";

function App() {

    const [query, setQuery] = useState('');
    const [modal, setModal] = useState(false);
    const [selectedCountryInfo, setSelectedCountryInfo] = useState<CountryInfo>({Country:'', TotalDeaths: 0, TotalRecovered: 0, TotalConfirmed: 0});
    let showCountryInfo = () => {
        setModal(true)
    }
    const [kindOfSort, setKindOfSort] = useState('')
    console.log(kindOfSort)

  return (
      <div className = {cl.AppWrapper}>
          <CountryModal visible = {modal}  notVisible = {() => setModal(false)}
                        selectedCountryInfo = {selectedCountryInfo}/>
          <PageHeader  query = {query}  setQuery = {setQuery}/>
          <TableHeader setKindOfSort = {setKindOfSort} />
          <CountryList showCountryInfo = {showCountryInfo}
                       setSelectedCountryInfo = {setSelectedCountryInfo}
                       kindOfSort = {kindOfSort}
                       query = {query}/>
      </div>
  );
}

export default App;
