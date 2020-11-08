import {BaseEntity} from "./BaseEntity";
import {UniqueEntity} from "./UniqueEntity";

export abstract class BaseAggregateRoot<T> extends BaseEntity<T> {
  private _domainEvents: any[] = [];

  public get id(): UniqueEntity {
    return this._id;
  }

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
