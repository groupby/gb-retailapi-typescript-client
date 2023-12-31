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
 * @interface ProductDtoAudience
 */
export interface ProductDtoAudience {
    /**
     * The genders of the audience. Strongly encouraged to use the standard values: 'male', 'female', 'unisex'. At most 5 values are allowed. Length limit of 128 characters.
     * @type {Array<string>}
     * @memberof ProductDtoAudience
     */
    genders?: Array<string>;
    /**
     * The age groups of the audience. Strongly encouraged to use the standard values: 'newborn' (up to 3 months old), 'infant' (3-12 months old), 'toddler' (1-5 years old), 'kids' (5-13 years old), 'adult' (typically teens or older). At most 5 values are allowed. Length limit of 128 characters.
     * @type {Array<string>}
     * @memberof ProductDtoAudience
     */
    ageGroups?: Array<string>;
}

/**
 * Check if a given object implements the ProductDtoAudience interface.
 */
export function instanceOfProductDtoAudience(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductDtoAudienceFromJSON(json: any): ProductDtoAudience {
    return ProductDtoAudienceFromJSONTyped(json, false);
}

export function ProductDtoAudienceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductDtoAudience {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'genders': !exists(json, 'genders') ? undefined : json['genders'],
        'ageGroups': !exists(json, 'ageGroups') ? undefined : json['ageGroups'],
    };
}

export function ProductDtoAudienceToJSON(value?: ProductDtoAudience | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'genders': value.genders,
        'ageGroups': value.ageGroups,
    };
}

