import {Dispatch} from "redux";
import axios from 'axios';
import {CountryDataAction, CountryDataActionTypes} from "../../types/country";

export const fetchCountriesData = () => {
    return async (dispatch: Dispatch<CountryDataAction>) => {
        try {
            dispatch({type: CountryDataActionTypes.FETCH_COUNTRIES})
            const response = await axios.get('https://api.covid19api.com/summary');
            dispatch({type: CountryDataActionTypes.FETCH_COUNTRIES_SUCCESS, payload: response.data.Countries})
        } catch (e) {
            dispatch({type: CountryDataActionTypes.FETCH_COUNTRIES_ERROR, payload: "ERROR"})
        }
    }
}

