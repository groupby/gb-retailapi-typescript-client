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
import type { BiasDto } from './BiasDto';
import {
    BiasDtoFromJSON,
    BiasDtoFromJSONTyped,
    BiasDtoToJSON,
} from './BiasDto';

/**
 * Inline biasing profile, which should be applied to the search. Takes priority over biasing profile.
 * @export
 * @interface BiasingProfileDto
 */
export interface BiasingProfileDto {
    /**
     * 
     * @type {Array<BiasDto>}
     * @memberof BiasingProfileDto
     */
    biases: Array<BiasDto>;
}

/**
 * Check if a given object implements the BiasingProfileDto interface.
 */
export function instanceOfBiasingProfileDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "biases" in value;

    return isInstance;
}

export function BiasingProfileDtoFromJSON(json: any): BiasingProfileDto {
    return BiasingProfileDtoFromJSONTyped(json, false);
}

export function BiasingProfileDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BiasingProfileDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'biases': ((json['biases'] as Array<any>).map(BiasDtoFromJSON)),
    };
}

export function BiasingProfileDtoToJSON(value?: BiasingProfileDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'biases': ((value.biases as Array<any>).map(BiasDtoToJSON)),
    };
}
