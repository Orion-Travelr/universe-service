import {AmenityMapper, AmenityRepository} from '../../infrastructure';
import {AmenityEntity} from '../../domain';
import {AmenityViewModel} from '../viewModels';
import {ResponseToolkit, Request} from 'hapi';

export class AmenityController {
  private repo: AmenityRepository;

  constructor(repo: AmenityRepository) {
    this.repo = repo;
  }

  public async index(request: Request, h: ResponseToolkit): Promise<AmenityViewModel[]> {
    const amenities = await this.repo.getAll();

    return amenities.map((amenity: AmenityEntity) => AmenityMapper.toView(amenity));
  }

  public async show(request: Request, h: ResponseToolkit): Promise<AmenityViewModel> {
    const galaxy = await this.repo.getById(Number(request.params.id));

    return AmenityMapper.toView(galaxy);
  }
}
