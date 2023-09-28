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
import type { NavigationDto } from './NavigationDto';
import {
    NavigationDtoFromJSON,
    NavigationDtoFromJSONTyped,
    NavigationDtoToJSON,
} from './NavigationDto';
import type { SearchRequestDto } from './SearchRequestDto';
import {
    SearchRequestDtoFromJSON,
    SearchRequestDtoFromJSONTyped,
    SearchRequestDtoToJSON,
} from './SearchRequestDto';

/**
 * Facet search response representation.
 * @export
 * @interface FacetSearchResponseDto
 */
export interface FacetSearchResponseDto {
    /**
     * 
     * @type {SearchRequestDto}
     * @memberof FacetSearchResponseDto
     */
    originalRequest: SearchRequestDto;
    /**
     * 
     * @type {NavigationDto}
     * @memberof FacetSearchResponseDto
     */
    availableNavigation: NavigationDto;
}

/**
 * Check if a given object implements the FacetSearchResponseDto interface.
 */
export function instanceOfFacetSearchResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "originalRequest" in value;
    isInstance = isInstance && "availableNavigation" in value;

    return isInstance;
}

export function FacetSearchResponseDtoFromJSON(json: any): FacetSearchResponseDto {
    return FacetSearchResponseDtoFromJSONTyped(json, false);
}

export function FacetSearchResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacetSearchResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'originalRequest': SearchRequestDtoFromJSON(json['originalRequest']),
        'availableNavigation': NavigationDtoFromJSON(json['availableNavigation']),
    };
}

export function FacetSearchResponseDtoToJSON(value?: FacetSearchResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'originalRequest': SearchRequestDtoToJSON(value.originalRequest),
        'availableNavigation': NavigationDtoToJSON(value.availableNavigation),
    };
}

