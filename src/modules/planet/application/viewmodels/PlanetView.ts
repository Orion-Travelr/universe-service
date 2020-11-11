import {TerrainView} from "./";

export interface PlanetView {
  planet_id: string | number,
  name: string,
  description: string,
  diameter: number,
  population: number,
  photo: null|{},
  amenities: null|any[],
  terrains: null|TerrainView[],
}
