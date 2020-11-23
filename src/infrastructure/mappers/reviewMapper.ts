import {UniqueEntity} from "../../core/domain";
import {BaseMapper} from "../../core/infrastructure";
import {ReviewsEntity} from "../../domain/reviewsEntity";
import {ReviewViewModel} from "../../application/viewModels/reviewViewModel";

export class ReviewMapper implements BaseMapper<ReviewsEntity> {

  public static toDomain(review: any): ReviewsEntity {
    return  ReviewsEntity.create({
      review: review.review,
      title: review.title,
      rating: review.rating,
      planet_id: review.planet_id,
      date: review.date,
    }, new UniqueEntity(review.id));
  }

  public static toView(review: ReviewsEntity): ReviewViewModel {
    return {
      id: review.id.toValue(),
      title: review.getTitle(),
      rating: review.getRating(),
      review: review.getReview(),
      date: review.getCreatedAt(),
    }
  }

  public static toPersistence(review: ReviewsEntity): any {
    return {

    };
  }
}
