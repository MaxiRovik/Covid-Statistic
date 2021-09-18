import {CountryDataAction,CountryState,CountryDataActionTypes} from "../../types/country";

const initialState: CountryState = {
    countries: [],
    error: null,
    loading: false
};

export const countryDataReducer = (state = initialState, action:CountryDataAction):CountryState  => {
    switch(action.type){
        case CountryDataActionTypes.FETCH_COUNTRIES:
            return {...state, loading:true };
        case CountryDataActionTypes.FETCH_COUNTRIES_SUCCESS:
            return {...state, loading: false, countries: action.payload };
        case CountryDataActionTypes.FETCH_COUNTRIES_ERROR:
            return {...state, loading: false, error: action.payload};
        default:
            return state

    }
};