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
 * Object with one single attribute and associated properties.
 * @export
 * @interface AttributeSuggestion
 */
export interface AttributeSuggestion {
    /**
     * Suggestion itself.
     * @type {Array<string>}
     * @memberof AttributeSuggestion
     */
    suggestions?: Array<string>;
}

/**
 * Check if a given object implements the AttributeSuggestion interface.
 */
export function instanceOfAttributeSuggestion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributeSuggestionFromJSON(json: any): AttributeSuggestion {
    return AttributeSuggestionFromJSONTyped(json, false);
}

export function AttributeSuggestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeSuggestion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'suggestions': !exists(json, 'suggestions') ? undefined : json['suggestions'],
    };
}

export function AttributeSuggestionToJSON(value?: AttributeSuggestion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'suggestions': value.suggestions,
    };
}

