import {AmenityViewModel, PhotoViewModel, TerrainViewModel} from './';
import {ReviewViewModel} from "./reviewViewModel";

export interface PlanetViewModel {
  id: string | number,
  name: string,
  description: string,
  diameter: number,
  population: number,
  climate: string,
  rotation_period_hours: number,
  price_dollars: number,
  price_cents: number,
  photo?: null|PhotoViewModel,
  amenities_available: null|AmenityViewModel[],
  terrains?: null|TerrainViewModel[],
  galaxy: null|{},
  reviews?: null|ReviewViewModel[],
}
