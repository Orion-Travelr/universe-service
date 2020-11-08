import uuid from 'uuid';
import {BaseIdentifier} from "./BaseIdentifier";

export class UniqueEntity extends BaseIdentifier<string | number>{
  constructor (id?: string | number) {
    super(id ? id : uuid.v4())
  }
}
