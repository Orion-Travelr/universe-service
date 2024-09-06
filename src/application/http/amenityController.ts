import {AmenityMapper} from "../../modules/amenities/infrastructure/AmenityMapper";
import {AmenityRepository} from "../../modules/amenities/infrastructure/AmenityRepository";
import {AmenityEntity} from "../../modules/amenities/domain/AmenityEntity";
import {AmenityViewModel} from '../viewModels';
import {Controller, Get, Param} from "@nestjs/common";

@Controller()
class AmenityController {
  constructor(private readonly repo: AmenityRepository) {}

  @Get()
  public async index(): Promise<AmenityViewModel[]> {
    const amenities = await this.repo.getAll();

    return amenities.map((amenity: AmenityEntity) => AmenityMapper.toView(amenity));
  }

  @Get(':id')
  public async show( @Param('id') id: string): Promise<AmenityViewModel> {
    const galaxy = await this.repo.getById(Number(id));

    return AmenityMapper.toView(galaxy);
  }
}

export {AmenityController}