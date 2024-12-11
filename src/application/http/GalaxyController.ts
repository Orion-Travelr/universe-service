import {GalaxyMapper} from "../../modules/galaxies/infrastructure/mappers/GalaxyMapper";
import {GalaxyEntity} from "../../modules/galaxies/domain/GalaxyEntity";
import {GalaxyViewModel} from '../viewModels';
import {Controller, Get, Param} from "@nestjs/common";
import {GalaxyService} from "../../modules/galaxies/application/GalaxyService";

@Controller('galaxies')
export class GalaxyController {
  constructor(private readonly service: GalaxyService) {}

  @Get()
  public async index(): Promise<GalaxyViewModel[]> {
    const galaxies = await this.service.getAll();
  
    return galaxies.map((galaxy: GalaxyEntity) => GalaxyMapper.toView(galaxy));
  }

  @Get(':id')
  public async show( @Param('id') id: string): Promise<GalaxyViewModel> {
    const galaxy = await this.service.getById(Number(id));
  
    return GalaxyMapper.toView(galaxy);
  }
}
