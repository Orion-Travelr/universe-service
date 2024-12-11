import {PrimaryKey, Property, BeforeCreate, BeforeUpdate, BaseEntity} from '@mikro-orm/core';

export abstract class BasePersistenceModel extends BaseEntity{
  @PrimaryKey({unsigned: true, type: 'bigint'})
  public id: number;
  
  @Property({type: 'date'})
  public created_at: Date;
  
  @Property({type: 'date', nullable: true, onUpdate: () => new Date()})
  public updated_at?: Date
  
  @BeforeCreate()
  async setCreatedAt(): Promise<any> {
    this.created_at = new Date();
  }
  
  @BeforeUpdate()
  async setUpdatedAt(): Promise<any> {
    this.updated_at = new Date();
  }
}
