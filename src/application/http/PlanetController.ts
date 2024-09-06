import {PlanetEntity} from "../../modules/planets/domain/PlanetEntity";
import {PlanetViewModel} from "../viewModels";
import {Controller, Get, Param, Query, Req} from "@nestjs/common";
import {PlanetService} from "../../modules/planets/application/PlanetService";
import {PlanetMapper} from "../../modules/planets/infrastructure/mappers/PlanetMapper";
import {Request} from "@nestjs/common";

export interface PlanetSearchParams {
  name: string|null,
  galaxyId: number|null,
  amenityIds: [number]|null,
}

@Controller('planets')
export class PlanetController {
  constructor(private readonly service: PlanetService) {}

  @Get()
  public async index(request: Request): Promise<PlanetViewModel[]> {
    const planets = await this.service.getAll();

    return planets.map((planet: PlanetEntity) => PlanetMapper.toView(planet));
  }

  @Get(':id')
  public async show(@Param('id') id: string): Promise<PlanetViewModel> {
    const planet = await this.service.getById(Number(id));

    return PlanetMapper.toView(planet);
  }

  public async search(@Param() params: any): Promise<PlanetViewModel[]> {
    const query:any = params.query;
    const searchParams:PlanetSearchParams = {
      name: query['name']?.split(','),
      galaxyId: query['galaxy_id'] ? Number(query['galaxy_id']) : null,
      amenityIds: query['amenities']?.split(',').map(Number)
    };

    const planets = await this.service.getBySearchParams(searchParams);

    return planets.map((planet: PlanetEntity) => PlanetMapper.toView(planet));
  }
}
