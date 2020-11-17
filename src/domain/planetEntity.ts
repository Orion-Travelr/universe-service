import {BaseAggregateRoot, UniqueEntity} from "../core/domain";
import {PlanetAmenityEntity, PlanetTerrainEntity, PlanetPhotoEntity} from "./";
import {GalaxyEntity} from './';

export interface PlanetProps {
  galaxy_id: number|bigint,
  name: string,
  description: string,
  diameter: number,
  population: number,
  climate: string,
  rotation_period_hours: number
  price_cents: number,
  featured?: boolean,
  terrains?: PlanetTerrainEntity[],
  amenities?: PlanetAmenityEntity[],
  photo?: PlanetPhotoEntity,
  galaxy: GalaxyEntity,
}

export class PlanetEntity extends BaseAggregateRoot<PlanetProps> {
  public getGalaxyId(): number| bigint{
    return this.props.galaxy_id;
  }

  public getName(): string {
    return this.props.name;
  }

  public getDescription(): string {
    return this.props.description;
  }

  public getDiameter(): number {
    return this.props.diameter;
  }

  public getPopulation(): number {
    return this.props.population;
  }
  
  public getGalaxy(): GalaxyEntity {
    return this.props.galaxy;
  }
  
  public getPriceInDollars(): number {
    return Math.round(this.props.price_cents / 100);
  }
  
  public getPriceInCents(): number {
    return this.props.price_cents;
  }

  public isFeatured(): boolean {
    return this.props.featured === true;
  }

  public setFeatured(): void {
    this.props.featured = true;
  }

  public getTerrains(): PlanetTerrainEntity[]|null {
    return this.props.terrains;
  }

  public getAmenities(): PlanetAmenityEntity[]|null {
    return this.props.amenities;
  }

  public getPhoto(): PlanetPhotoEntity|null {
    return this.props.photo;
  }
  
  public getClimate(): string {
    return this.props.climate;
  }
  
  public getRotationPeriodInHours(): number {
    return this.props.rotation_period_hours;
  }

  public addAmenity(amenity: PlanetAmenityEntity): void {
    this.props.amenities.push(amenity);
  }

  public addTerrain(terrain: PlanetTerrainEntity): void {
    this.props.terrains.push(terrain);
  }

  public static create (props: PlanetProps, id?: UniqueEntity): PlanetEntity {
    return new PlanetEntity(props, id);
  }
}
