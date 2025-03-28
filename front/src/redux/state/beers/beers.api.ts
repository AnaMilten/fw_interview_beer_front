import axios from "axios";
import { Beer } from "../../../model/Beer";

export const getBeers = () => axios.get<Array<Beer>>(`/api/beers`);
export const postBeer = (beer: Beer) => axios.post<Beer>(`/api/beers`, beer);
export const rateBeer = (beer: Beer, rateValue: number) =>
  axios.post<Beer>(`/api/beers/${beer.uuid}/rate`, { score: rateValue });
