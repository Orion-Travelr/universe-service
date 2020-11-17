import {PlanetPhotoEntity} from '../../domain';
import {UniqueEntity} from "../../core/domain";
import {BaseMapper} from "../../core/infrastructure";
import {PhotoViewModel} from '../../application/viewModels';

export class PhotoMapper implements BaseMapper<PlanetPhotoEntity> {

  public static toDomain(planetPhoto: any): PlanetPhotoEntity {
    return  PlanetPhotoEntity.create({
      name: planetPhoto.name,
      file_path: planetPhoto.file_path,
      file_name: planetPhoto.file_name,
      thumbnail: planetPhoto.thumbnail,
    }, new UniqueEntity(planetPhoto.id));
  }

  public static toView(planetPhoto: PlanetPhotoEntity): PhotoViewModel {
    return {
      thumbnail: planetPhoto.getThumbnail(),
      file_path: planetPhoto.getFilePath(),
    }
  }

  public static toPersistence(planetPhoto: PlanetPhotoEntity): any {
    return {

    };
  }
}
