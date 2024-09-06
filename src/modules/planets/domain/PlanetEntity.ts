import {BaseAggregateRoot, UniqueEntity} from "../../../core/domain";
import {AmenityEntity} from "./AmenityEntity";
import {TerrainEntity} from "./TerrainEntity";
import {PhotoEntity} from "./PhotoEntity";
import {GalaxyEntity} from "../../galaxies/domain/GalaxyEntity";
import {ReviewsEntity} from "./ReviewsEntity";

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
  terrains?: TerrainEntity[],
  amenities?: AmenityEntity[],
  photo?: PhotoEntity,
  galaxy: GalaxyEntity,
  reviews?: ReviewsEntity[],
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

  public getTerrains(): TerrainEntity[]|null {
    return this.props.terrains;
  }

  public getAmenities(): AmenityEntity[]|null {
    return this.props.amenities;
  }

  public getPhoto(): PhotoEntity|null {
    return this.props.photo;
  }

  public getClimate(): string {
    return this.props.climate;
  }

  public getRotationPeriodInHours(): number {
    return this.props.rotation_period_hours;
  }

  public getReviews(): ReviewsEntity[]|null {
    return this.props.reviews;
  }

  public addAmenity(amenity: AmenityEntity): void {
    this.props.amenities.push(amenity);
  }

  public addTerrain(terrain: TerrainEntity): void {
    this.props.terrains.push(terrain);
  }

  public addReview(review: ReviewsEntity): void {
    this.props.reviews.push(review);
  }

  public getTotalReviews(): number {
    return this.getReviews().length;
  }

  public getAverageRating(): number {
    let reviews = this.getReviews();

    if (!reviews || reviews.length === 0) {
      return 0;
    }

    const total = reviews.map((r: ReviewsEntity) => r.getRating()).reduce((a, b) => a + b, 0);

    return total / reviews.length;
  }

  public static create (props: PlanetProps, id?: UniqueEntity): PlanetEntity {
    return new PlanetEntity(props, id);
  }
}
