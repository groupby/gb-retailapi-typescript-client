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
 * @interface Filter
 */
export interface Filter {
    /**
     * 
     * @type {string}
     * @memberof Filter
     */
    field: string;
    /**
     * 
     * @type {string}
     * @memberof Filter
     */
    value?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Filter
     */
    exclude: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Filter
     */
    derivedFromProduct: boolean;
}

/**
 * Check if a given object implements the Filter interface.
 */
export function instanceOfFilter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "field" in value;
    isInstance = isInstance && "exclude" in value;
    isInstance = isInstance && "derivedFromProduct" in value;

    return isInstance;
}

export function FilterFromJSON(json: any): Filter {
    return FilterFromJSONTyped(json, false);
}

export function FilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Filter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'field': json['field'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'exclude': json['exclude'],
        'derivedFromProduct': json['derivedFromProduct'],
    };
}

export function FilterToJSON(value?: Filter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'field': value.field,
        'value': value.value,
        'exclude': value.exclude,
        'derivedFromProduct': value.derivedFromProduct,
    };
}

