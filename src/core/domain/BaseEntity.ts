import {UniqueEntity} from "./UniqueEntity";

export abstract class BaseEntity<T> {
  protected readonly _id: UniqueEntity;
  public readonly props: T;

  protected constructor(props: T, id?: UniqueEntity) {
    this._id = id ? id : new UniqueEntity();
    this.props = props;
  }

  public get id(): UniqueEntity {
    return this._id;
  }

  public equals(object?: BaseEntity<T>): boolean {
    if (object === null) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!BaseEntity.isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }

  private static isEntity(v: any): v is BaseEntity<any> {
    return v instanceof BaseEntity;
  }
}
