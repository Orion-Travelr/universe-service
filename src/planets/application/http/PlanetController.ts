import {PlanetMapper, PlanetsRepository} from '../../infrastructure';
import {Planet} from "../../domain";
import {PlanetView} from "../viewmodels";
import {ResponseToolkit, Request} from 'hapi';

export class PlanetController {
  private planetRepo: PlanetsRepository;
  
  constructor(planetRepo: PlanetsRepository) {
    this.planetRepo = planetRepo;
  }
  
  public async index(request: Request, h: ResponseToolkit): Promise<PlanetView[]>
  {
    const planets = await this.planetRepo.getAllPlanets();
  
    return planets.map((planet: Planet) => PlanetMapper.toView(planet));
  }
  
  public async show(request: Request, h: ResponseToolkit): Promise<PlanetView>
  {
    console.log('hello');
    const planet = await this.planetRepo.getByPlanetId(<number><unknown> request.params.id);
  
    return PlanetMapper.toView(planet);
  }
}
