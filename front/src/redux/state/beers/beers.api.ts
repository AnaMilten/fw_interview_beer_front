import axios from 'axios'
import { Beer } from '../../../model/Beer'

export const getBeers = () => axios.get<Array<Beer>>(`/api/beers`)
export const postBeer = (beer: Beer) => axios.post<Beer>(`/api/beers`, beer)
export const rateBeer = (beerId: string, rateValue: number) => axios.post<Beer>(`/api/beers/${beerId}/rate`, {score: rateValue})
