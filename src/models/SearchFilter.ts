/* tslint:disable */
/* eslint-disable */
/**
 * GroupBy Retail
 * GroupBy Retail API
 *
 * The version of the OpenAPI document: 0.0
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
 * @interface SearchFilter
 */
export interface SearchFilter {
    /**
     * String to be appended to the search query.
     * @type {string}
     * @memberof SearchFilter
     */
    value: string;
}

/**
 * Check if a given object implements the SearchFilter interface.
 */
export function instanceOfSearchFilter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function SearchFilterFromJSON(json: any): SearchFilter {
    return SearchFilterFromJSONTyped(json, false);
}

export function SearchFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
    };
}

export function SearchFilterToJSON(value?: SearchFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}
