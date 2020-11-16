import {BaseEntity} from "./BaseEntity";

export abstract class BaseAggregateRoot<T> extends BaseEntity<T> {
  private _domainEvents: any[] = [];

  public get domainEvents(): any[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: any): void {
    this._domainEvents.push(domainEvent);

    this.logDomainEventAdded(domainEvent);
  }

  public clearEvents(): void {
    this._domainEvents.splice(0, this._domainEvents.length);
  }

  private logDomainEventAdded(domainEvent:any): void {
    const thisClass = Reflect.getPrototypeOf(this);
    const domainEventClass = Reflect.getPrototypeOf(domainEvent);
    console.info(`[Domain Event Created]:`, thisClass.constructor.name, '==>', domainEventClass.constructor.name)
  }
}
