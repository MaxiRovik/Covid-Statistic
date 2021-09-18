import {useMemo} from "react";

const useSortedPost = (countryItems, kindOfSort) => {
    const sortedCountryItems = useMemo(() => {
        if (kindOfSort ==='down'){
            return [...countryItems].sort((a,b)=> a['TotalConfirmed'] - b['TotalConfirmed'])
        }
        if (kindOfSort ==='up'){
            return [...countryItems].sort((a,b)=> b['TotalConfirmed'] - a['TotalConfirmed'])
        }
        return countryItems
    },[kindOfSort,countryItems]);

    return sortedCountryItems;
};

export const useCountryItems = (countryItems, kindOfSort, query) => {
    const sortedCountryItems = useSortedPost(countryItems, kindOfSort);

    const sortedAndSearchedCountryItems= useMemo(() => {
        if (query.length === 1){
            return sortedCountryItems.filter(item => item.Country[0].toLowerCase().includes(query))
        }
        return sortedCountryItems.filter(item => item.Country.toLowerCase().includes(query))
    },[query,sortedCountryItems]);

    return sortedAndSearchedCountryItems;
};