import {BaseMapper} from "../../../../core/infrastructure";
import {UniqueEntity} from "../../../../core/domain";
import {PhotoEntity} from "../../domain/PhotoEntity";
import {PhotoViewModel} from "../../../../application/viewModels";

export class PhotoMapper implements BaseMapper<PhotoEntity> {

  public static toDomain(planetPhoto: any): PhotoEntity {
    return  PhotoEntity.create({
      name: planetPhoto.file_name,
      file_path: planetPhoto.file_path,
      file_name: planetPhoto.file_name,
    }, new UniqueEntity(planetPhoto.id));
  }

  public static toView(planetPhoto: PhotoEntity): PhotoViewModel {
    return {
      thumbnail: planetPhoto.getThumbnail(),
      file_path: planetPhoto.getFilePath(),
      name: planetPhoto.getFileName(),
    }
  }

  public static toPersistence(planetPhoto: PhotoEntity): any {
    return {

    };
  }
}
