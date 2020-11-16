import {AmenityView, PhotoView, TerrainView} from './';

export interface PlanetView {
  id: string | number,
  name: string,
  description: string,
  diameter: number,
  population: number,
  climate: string,
  rotation_period_hours: number,
  price_dollars: number,
  price_cents: number,
  photo: null|PhotoView,
  amenities_available: null|AmenityView[],
  terrains: null|TerrainView[],
  galaxy: null|{},
}
