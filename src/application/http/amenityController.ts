import {AmenityMapper} from "../../modules/amenities/infrastructure/AmenityMapper";
import {AmenityRepository} from "../../modules/amenities/infrastructure/AmenityRepository";
import {AmenityEntity} from "../../modules/amenities/domain/AmenityEntity";
import {AmenityViewModel} from '../viewModels';
import {Controller, Get, Param} from "@nestjs/common";
import {AmenityService} from "../../modules/amenities/application/AmenityService";

@Controller()
class AmenityController {
  constructor(private readonly service: AmenityService) {}

  @Get()
  public async index(): Promise<AmenityViewModel[]> {
    const amenities = await this.service.getAll();

    return amenities.map((amenity: AmenityEntity) => AmenityMapper.toView(amenity));
  }

  @Get(':id')
  public async show( @Param('id') id: string): Promise<AmenityViewModel> {
    const amenity = await this.service.getById(Number(id));

    return AmenityMapper.toView(amenity);
  }
}

export {AmenityController}