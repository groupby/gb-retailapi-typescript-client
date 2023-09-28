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
 * Object which is contains brands and categories associated with this suggestion.
 * @export
 * @interface AdditionalInfo
 */
export interface AdditionalInfo {
    /**
     * 
     * @type {Array<string>}
     * @memberof AdditionalInfo
     */
    brands: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AdditionalInfo
     */
    categories: Array<string>;
}

/**
 * Check if a given object implements the AdditionalInfo interface.
 */
export function instanceOfAdditionalInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "brands" in value;
    isInstance = isInstance && "categories" in value;

    return isInstance;
}

export function AdditionalInfoFromJSON(json: any): AdditionalInfo {
    return AdditionalInfoFromJSONTyped(json, false);
}

export function AdditionalInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdditionalInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'brands': json['brands'],
        'categories': json['categories'],
    };
}

export function AdditionalInfoToJSON(value?: AdditionalInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'brands': value.brands,
        'categories': value.categories,
    };
}

