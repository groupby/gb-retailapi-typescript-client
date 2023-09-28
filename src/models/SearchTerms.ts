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
import type { AdditionalInfo } from './AdditionalInfo';
import {
    AdditionalInfoFromJSON,
    AdditionalInfoFromJSONTyped,
    AdditionalInfoToJSON,
} from './AdditionalInfo';

/**
 * Object with one single suggestion and associated info (brands and categories).
 * @export
 * @interface SearchTerms
 */
export interface SearchTerms {
    /**
     * Suggestion itself.
     * @type {string}
     * @memberof SearchTerms
     */
    value?: string;
    /**
     * 
     * @type {AdditionalInfo}
     * @memberof SearchTerms
     */
    additionalInfo: AdditionalInfo;
}

/**
 * Check if a given object implements the SearchTerms interface.
 */
export function instanceOfSearchTerms(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "additionalInfo" in value;

    return isInstance;
}

export function SearchTermsFromJSON(json: any): SearchTerms {
    return SearchTermsFromJSONTyped(json, false);
}

export function SearchTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchTerms {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'additionalInfo': AdditionalInfoFromJSON(json['additionalInfo']),
    };
}

export function SearchTermsToJSON(value?: SearchTerms | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'additionalInfo': AdditionalInfoToJSON(value.additionalInfo),
    };
}

