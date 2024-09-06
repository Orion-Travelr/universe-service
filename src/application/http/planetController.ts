import {PlanetMapper, PlanetRepository} from '../../infrastructure';
import {PlanetEntity} from "../../domain";
import {PlanetViewModel} from "../viewModels";

export interface PlanetSearchParams {
  name: string|null,
  galaxyId: number|null,
  amenityIds: [number]|null,
}

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

  public async search(request: Request, h: ResponseToolkit): Promise<PlanetViewModel[]> {
    const query:any = request.query;
    const searchParams:PlanetSearchParams = {
      name: query['name']?.split(','),
      galaxyId: query['galaxy_id'] ? Number(query['galaxy_id']) : null,
      amenityIds: query['amenities']?.split(',').map(Number)
    };

    const planets = await this.planetRepo.getBySearchParams(searchParams);

    return planets.map((planet: PlanetEntity) => PlanetMapper.toView(planet));
  }
}
