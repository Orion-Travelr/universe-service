import {BaseEntity, UniqueEntity} from "../../../core/domain";

export interface ReviewProps {
  title: string,
  planet_id: number,
  review: string,
  rating: number,
  date: Date,
}

export class ReviewsEntity extends BaseEntity<ReviewProps> {
  public getTitle(): string {
    return this.props.title;
  }

  public getReview(): string {
    return this.props.review;
  }

  public getRating(): number {
    return this.props.rating;
  }

  public getPlanetId(): number {
    return this.props.planet_id;
  }

  public getCreatedAt(): Date {
    return this.props.date;
  }

  public static create (props: ReviewProps, id?: UniqueEntity): ReviewsEntity {
    return new ReviewsEntity(props, id);
  }
}
