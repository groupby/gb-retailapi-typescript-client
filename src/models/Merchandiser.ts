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
 * @interface Merchandiser
 */
export interface Merchandiser {
    /**
     * 
     * @type {string}
     * @memberof Merchandiser
     */
    merchandiserId: string;
}

/**
 * Check if a given object implements the Merchandiser interface.
 */
export function instanceOfMerchandiser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "merchandiserId" in value;

    return isInstance;
}

export function MerchandiserFromJSON(json: any): Merchandiser {
    return MerchandiserFromJSONTyped(json, false);
}

export function MerchandiserFromJSONTyped(json: any, ignoreDiscriminator: boolean): Merchandiser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'merchandiserId': json['merchandiserId'],
    };
}

export function MerchandiserToJSON(value?: Merchandiser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'merchandiserId': value.merchandiserId,
    };
}

