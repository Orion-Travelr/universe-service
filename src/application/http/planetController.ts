import {PlanetMapper, PlanetRepository} from '../../infrastructure';
import {PlanetEntity} from "../../domain";
import {PlanetViewModel} from "../viewModels";
import {ResponseToolkit, Request} from 'hapi';

export class PlanetController {
  private planetRepo: PlanetRepository;
  
  constructor(planetRepo: PlanetRepository) {
    this.planetRepo = planetRepo;
  }
  
  public async index(request: Request, h: ResponseToolkit): Promise<PlanetViewModel[]> {
    const planets = await this.planetRepo.getAll();
  
    return planets.map((planet: PlanetEntity) => PlanetMapper.toView(planet));
  }
  
  public async show(request: Request, h: ResponseToolkit): Promise<PlanetViewModel> {
    const planet = await this.planetRepo.getById(Number(request.params.id));
  
    return PlanetMapper.toView(planet);
  }
}
