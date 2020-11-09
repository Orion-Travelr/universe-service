export interface BaseRepository<T> {
  save(entity: T): Promise<void>;
}
