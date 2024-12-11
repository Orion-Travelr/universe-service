import {BaseEntity, UniqueEntity} from "../../../core/domain";

export interface PlanetPhotoProps {
  name: string,
  file_name: string,
  file_path: string,
}

export class PhotoEntity extends BaseEntity<PlanetPhotoProps> {
  public static create(props: PlanetPhotoProps, id?: UniqueEntity): PhotoEntity {
    return new PhotoEntity(props, id);
  }

  public getName(): string {
    return this.props.name;
  }

  public getFileName(): string {
    return this.props.file_name;
  }

  public getFilePath(): string {
    return this.props.file_path;
  }

  public getThumbnail(): string {
    return `https://orion-travelr.s3-us-west-1.amazonaws.com/images/planets/thumbs/${this.props.file_name.slice(0, -4)}-300x300.jpg`;
  }
}
