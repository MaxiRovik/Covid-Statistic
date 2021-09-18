export interface CountryState {
    countries: any[];
    loading: boolean;
    error: null | string;

}
export enum CountryDataActionTypes {
    FETCH_COUNTRIES = 'FETCH_COUNTRIES',
    FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS',
    FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR',
}

interface FetchCountriesAction {
    type: CountryDataActionTypes.FETCH_COUNTRIES
}
interface FetchCountriesSuccessAction {
    type: CountryDataActionTypes.FETCH_COUNTRIES_SUCCESS;
    payload: any[];
}
interface FetchCountriesErrorAction {
    type: CountryDataActionTypes.FETCH_COUNTRIES_ERROR;
    payload: string;
}

export type CountryDataAction =
    FetchCountriesAction
    | FetchCountriesSuccessAction
    | FetchCountriesErrorAction

export interface CountryInfo {
    "Country": string,
    "TotalConfirmed": number,
    "TotalDeaths": number,
    "TotalRecovered": number
}

export interface ModalInfoRowProps {
    TotalDeaths: number,
    TotalRecovered:number,
    TotalConfirmed:number
}