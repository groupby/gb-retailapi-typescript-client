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
 * @interface ProductDtoPublishTime
 */
export interface ProductDtoPublishTime {
    /**
     * Timestamp seconds.
     * @type {number}
     * @memberof ProductDtoPublishTime
     */
    seconds?: number;
    /**
     * Timestamp nanos.
     * @type {number}
     * @memberof ProductDtoPublishTime
     */
    nanos?: number;
}

/**
 * Check if a given object implements the ProductDtoPublishTime interface.
 */
export function instanceOfProductDtoPublishTime(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductDtoPublishTimeFromJSON(json: any): ProductDtoPublishTime {
    return ProductDtoPublishTimeFromJSONTyped(json, false);
}

export function ProductDtoPublishTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductDtoPublishTime {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'seconds': !exists(json, 'seconds') ? undefined : json['seconds'],
        'nanos': !exists(json, 'nanos') ? undefined : json['nanos'],
    };
}

export function ProductDtoPublishTimeToJSON(value?: ProductDtoPublishTime | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'seconds': value.seconds,
        'nanos': value.nanos,
    };
}

