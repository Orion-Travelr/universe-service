import {PlanetPhoto} from '../../domain';
import {UniqueEntity} from "../../../../domain";
import {BaseMapper} from "../../../../infrastructure";
import {PhotoView} from '../../application/viewmodels';

export class PhotoMapper implements BaseMapper<PlanetPhoto> {

  public static toDomain(planetPhoto: any): PlanetPhoto {
    return  PlanetPhoto.create({
      name: planetPhoto.name,
      file_path: planetPhoto.file_path,
      file_name: planetPhoto.file_name,
      thumbnail: planetPhoto.thumbnail,
    }, new UniqueEntity(planetPhoto.id));
  }

  public static toView(planetPhoto: PlanetPhoto): PhotoView {
    return {
      thumbnail: planetPhoto.getThumbnail(),
      file_path: planetPhoto.getFilePath(),
    }
  }

  public static toPersistence(planetPhoto: PlanetPhoto): any {
    return {

    };
  }
}
