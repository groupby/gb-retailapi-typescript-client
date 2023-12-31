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
 * @interface BoostedProductBucket
 */
export interface BoostedProductBucket {
    /**
     * 
     * @type {Array<string>}
     * @memberof BoostedProductBucket
     */
    products: Array<string>;
}

/**
 * Check if a given object implements the BoostedProductBucket interface.
 */
export function instanceOfBoostedProductBucket(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "products" in value;

    return isInstance;
}

export function BoostedProductBucketFromJSON(json: any): BoostedProductBucket {
    return BoostedProductBucketFromJSONTyped(json, false);
}

export function BoostedProductBucketFromJSONTyped(json: any, ignoreDiscriminator: boolean): BoostedProductBucket {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'products': json['products'],
    };
}

export function BoostedProductBucketToJSON(value?: BoostedProductBucket | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'products': value.products,
    };
}

