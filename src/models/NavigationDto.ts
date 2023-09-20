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
import type { Metadata } from './Metadata';
import {
    MetadataFromJSON,
    MetadataFromJSONTyped,
    MetadataToJSON,
} from './Metadata';
import type { NavigationTypeDto } from './NavigationTypeDto';
import {
    NavigationTypeDtoFromJSON,
    NavigationTypeDtoFromJSONTyped,
    NavigationTypeDtoToJSON,
} from './NavigationTypeDto';
import type { RefinementDto } from './RefinementDto';
import {
    RefinementDtoFromJSON,
    RefinementDtoFromJSONTyped,
    RefinementDtoToJSON,
} from './RefinementDto';

/**
 * Navigation available for the shopper to refine the results on.
 * @export
 * @interface NavigationDto
 */
export interface NavigationDto {
    /**
     * Name of the field the navigation in on.
     * @type {string}
     * @memberof NavigationDto
     */
    name?: string;
    /**
     * Name of the navigation for display purposes.
     * @type {string}
     * @memberof NavigationDto
     */
    displayName?: string;
    /**
     * 
     * @type {NavigationTypeDto}
     * @memberof NavigationDto
     */
    type: NavigationTypeDto;
    /**
     * 
     * @type {Array<RefinementDto>}
     * @memberof NavigationDto
     */
    refinements: Array<RefinementDto>;
    /**
     * Flag if this navigation supports or queries.
     * @type {boolean}
     * @memberof NavigationDto
     */
    or?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NavigationDto
     */
    source: string;
    /**
     * 
     * @type {Array<Metadata>}
     * @memberof NavigationDto
     */
    metadata: Array<Metadata>;
    /**
     * Place id for inventory navigations.
     * @type {string}
     * @memberof NavigationDto
     */
    placeId: string;
}

/**
 * Check if a given object implements the NavigationDto interface.
 */
export function instanceOfNavigationDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "refinements" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "placeId" in value;

    return isInstance;
}

export function NavigationDtoFromJSON(json: any): NavigationDto {
    return NavigationDtoFromJSONTyped(json, false);
}

export function NavigationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): NavigationDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'type': NavigationTypeDtoFromJSON(json['type']),
        'refinements': ((json['refinements'] as Array<any>).map(RefinementDtoFromJSON)),
        'or': !exists(json, 'or') ? undefined : json['or'],
        'source': json['source'],
        'metadata': ((json['metadata'] as Array<any>).map(MetadataFromJSON)),
        'placeId': json['placeId'],
    };
}

export function NavigationDtoToJSON(value?: NavigationDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'displayName': value.displayName,
        'type': NavigationTypeDtoToJSON(value.type),
        'refinements': ((value.refinements as Array<any>).map(RefinementDtoToJSON)),
        'or': value.or,
        'source': value.source,
        'metadata': ((value.metadata as Array<any>).map(MetadataToJSON)),
        'placeId': value.placeId,
    };
}

