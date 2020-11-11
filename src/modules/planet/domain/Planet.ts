import {BaseAggregateRoot, UniqueEntity} from "../../../domain";
import {PlanetAmenity, PlanetPhoto, PlanetTerrain} from "./";

export interface PlanetProps {
  galaxy_id: number,
  name: string,
  description: string,
  diameter: number,
  population: number,
  featured?: boolean,
  terrains?: PlanetTerrain[],
  amenities?: PlanetAmenity[],
  photo?: PlanetPhoto,
}

export class Planet extends BaseAggregateRoot<PlanetProps> {
  public getGalaxyId(): number {
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

  public getPopulations(): number {
    return this.props.population;
  }

  public isFeatured(): boolean {
    return this.props.featured === true;
  }

  public setFeatured(): void {
    this.props.featured = true;
  }

  public getTerrains(): PlanetTerrain[]|null {
    return this.props.terrains;
  }

  public getAmenities(): PlanetAmenity[]|null {
    return this.props.amenities;
  }

  public getPhoto(): PlanetPhoto|null {
    return this.props.photo;
  }

  public addAmenity(amenity: PlanetAmenity): void {
    this.props.amenities.push(amenity);
  }

  public addTerrain(terrain: PlanetTerrain): void {
    this.props.terrains.push(terrain);
  }

  public static create (props: PlanetProps, id?: UniqueEntity): Planet {
    return new Planet(props, id);
  }
}
