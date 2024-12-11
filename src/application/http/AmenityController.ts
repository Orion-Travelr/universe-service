import {AmenityViewModel} from '../viewModels';
import {Controller, Get, Param} from "@nestjs/common";
import {AmenityEntity} from "../../modules/planets/domain/AmenityEntity";
import {AmenityService} from "../../modules/planets/application/AmenityService";
import {AmenityMapper} from "../../modules/planets/infrastructure/mappers/AmenityMapper";

@Controller('amenities')
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