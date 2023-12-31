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
import type { Facet } from './Facet';
import {
    FacetFromJSON,
    FacetFromJSONTyped,
    FacetToJSON,
} from './Facet';
import type { SearchRequestDto } from './SearchRequestDto';
import {
    SearchRequestDtoFromJSON,
    SearchRequestDtoFromJSONTyped,
    SearchRequestDtoToJSON,
} from './SearchRequestDto';

/**
 * Request that should be populated to configure a search API call, made by the client on behalf of a shopper. Contains original request and information about facet for which extra keys requested.
 * @export
 * @interface FacetSearchRequestDto
 */
export interface FacetSearchRequestDto {
    /**
     * 
     * @type {Facet}
     * @memberof FacetSearchRequestDto
     */
    facet: Facet;
    /**
     * 
     * @type {SearchRequestDto}
     * @memberof FacetSearchRequestDto
     */
    originalRequest: SearchRequestDto;
}

/**
 * Check if a given object implements the FacetSearchRequestDto interface.
 */
export function instanceOfFacetSearchRequestDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facet" in value;
    isInstance = isInstance && "originalRequest" in value;

    return isInstance;
}

export function FacetSearchRequestDtoFromJSON(json: any): FacetSearchRequestDto {
    return FacetSearchRequestDtoFromJSONTyped(json, false);
}

export function FacetSearchRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacetSearchRequestDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facet': FacetFromJSON(json['facet']),
        'originalRequest': SearchRequestDtoFromJSON(json['originalRequest']),
    };
}

export function FacetSearchRequestDtoToJSON(value?: FacetSearchRequestDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facet': FacetToJSON(value.facet),
        'originalRequest': SearchRequestDtoToJSON(value.originalRequest),
    };
}

