import {PlanetSearchParams} from "../../application/http/PlanetController";

export interface BaseRepository<T> {
  save(entity: T): Promise<void>;
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T>;
}
