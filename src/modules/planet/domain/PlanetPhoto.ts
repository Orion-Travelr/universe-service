import {BaseEntity, UniqueEntity} from "../../../domain";

export interface PlanetPhotoProps {
  name: string,
  file_name: string,
  file_path: string,
  thumbnail: string,
}

export class PlanetPhoto extends BaseEntity<PlanetPhotoProps> {
  public static create(props: PlanetPhotoProps, id?: UniqueEntity): PlanetPhoto {
    return new PlanetPhoto(props, id);
  }
  
  public getName(): string
  {
    return this.props.name;
  }
  
  public getFileName(): string
  {
    return this.props.file_name;
  }
  
  public getFilePath(): string
  {
    return this.props.file_path;
  }
  
  public getThumbnail(): string
  {
    return this.props.thumbnail;
  }
}
