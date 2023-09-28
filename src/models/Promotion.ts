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
 * The promotions applied to the product. A maximum of 10 values are allowed per product.
 * @export
 * @interface Promotion
 */
export interface Promotion {
    /**
     * ID of the promotion. For example, 'free gift'. Length limit of 128 characters.
     * @type {string}
     * @memberof Promotion
     */
    promotionId?: string;
}

/**
 * Check if a given object implements the Promotion interface.
 */
export function instanceOfPromotion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PromotionFromJSON(json: any): Promotion {
    return PromotionFromJSONTyped(json, false);
}

export function PromotionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Promotion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'promotionId': !exists(json, 'promotionId') ? undefined : json['promotionId'],
    };
}

export function PromotionToJSON(value?: Promotion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'promotionId': value.promotionId,
    };
}

