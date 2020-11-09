import {PlanetMapper, PlanetPersistenceRepository} from "../../infrastructure";
import {Planet} from "../../domain";
import {PlanetView} from "../viewmodels";

export const index = async(request: any, h: any): Promise<PlanetView[]> => {
  const planets = await PlanetPersistenceRepository.getAllPlanets();

  return planets.map((planet: Planet) => PlanetMapper.toView(planet));
};

export const show = async(request: any, h: any): Promise<PlanetView> => {
  const planet = await PlanetPersistenceRepository.getByPlanetId(request.params.id);

  return PlanetMapper.toView(planet);
};
