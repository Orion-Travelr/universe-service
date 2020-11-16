
export class BaseIdentifier<T> {
  constructor(readonly value: T) {
    this.value = value;
  }

  public equals(id?: BaseIdentifier<T>): boolean {
    if (id === null || id === undefined) {
      return false;
    }

    if (!(id instanceof this.constructor)) {
      return false;
    }

    return id.toValue() === this.value;
  }

  public toString(): string {
    return String(this.value);
  }

  public toValue(): T {
    return this.value;
  }
}
