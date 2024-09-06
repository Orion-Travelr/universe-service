import {GalaxyMapper, GalaxyRepository} from '../../infrastructure';
import {GalaxyEntity} from '../../domain';
import {GalaxyViewModel} from '../viewModels';

export class GalaxyController {
  private repo: GalaxyRepository;
  
  constructor(repo: GalaxyRepository) {
    this.repo = repo;
  }
  
  public async index(request: Request, h: ResponseToolkit): Promise<GalaxyViewModel[]> {
    const galaxies = await this.repo.getAll();
  
    return galaxies.map((galaxy: GalaxyEntity) => GalaxyMapper.toView(galaxy));
  }
  
  public async show(request: Request, h: ResponseToolkit): Promise<GalaxyViewModel> {
    const galaxy = await this.repo.getById(Number(request.params.id));
  
    return GalaxyMapper.toView(galaxy);
  }
}
