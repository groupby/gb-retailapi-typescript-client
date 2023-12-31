/* tslint:disable */
/* eslint-disable */
/**
 * GroupBy Retail
 * GroupBy Retail API
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProductDtoRating
 */
export interface ProductDtoRating {
    /**
     * The total number of ratings. This value is independent of the value of histogram.This value must be nonnegative.
     * @type {number}
     * @memberof ProductDtoRating
     */
    ratingCount?: number;
    /**
     * The average rating of the product. The rating is scaled at 1-5.
     * @type {number}
     * @memberof ProductDtoRating
     */
    averageRating?: number;
    /**
     * List of rating counts per rating value (index = rating - 1). The list is empty if there is no rating. If the list is non-empty, its size is always 5. For example, [41, 14, 13, 47, 303]. It means that the product got 41 ratings with 1 star, 14 ratings with 2 star, and so on.
     * @type {Array<number>}
     * @memberof ProductDtoRating
     */
    ratingHistogram?: Array<number>;
}

/**
 * Check if a given object implements the ProductDtoRating interface.
 */
export function instanceOfProductDtoRating(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductDtoRatingFromJSON(json: any): ProductDtoRating {
    return ProductDtoRatingFromJSONTyped(json, false);
}

export function ProductDtoRatingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductDtoRating {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ratingCount': !exists(json, 'ratingCount') ? undefined : json['ratingCount'],
        'averageRating': !exists(json, 'averageRating') ? undefined : json['averageRating'],
        'ratingHistogram': !exists(json, 'ratingHistogram') ? undefined : json['ratingHistogram'],
    };
}

export function ProductDtoRatingToJSON(value?: ProductDtoRating | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ratingCount': value.ratingCount,
        'averageRating': value.averageRating,
        'ratingHistogram': value.ratingHistogram,
    };
}

