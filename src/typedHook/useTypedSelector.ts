import {TypedUseSelectorHook, useSelector} from "react-redux";
import {CountryState} from "../types/country";

export const useTypeSelector: TypedUseSelectorHook<CountryState> = useSelector