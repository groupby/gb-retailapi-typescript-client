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
 * Information regarding where the page of results starts and ends.
 * @export
 * @interface PageInfoDto
 */
export interface PageInfoDto {
    /**
     * Where in the list of products the page begins.
     * @type {number}
     * @memberof PageInfoDto
     */
    recordStart?: number;
    /**
     * Where in the list of products the page ends.
     * @type {number}
     * @memberof PageInfoDto
     */
    recordEnd?: number;
}

/**
 * Check if a given object implements the PageInfoDto interface.
 */
export function instanceOfPageInfoDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageInfoDtoFromJSON(json: any): PageInfoDto {
    return PageInfoDtoFromJSONTyped(json, false);
}

export function PageInfoDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInfoDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordStart': !exists(json, 'recordStart') ? undefined : json['recordStart'],
        'recordEnd': !exists(json, 'recordEnd') ? undefined : json['recordEnd'],
    };
}

export function PageInfoDtoToJSON(value?: PageInfoDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'recordStart': value.recordStart,
        'recordEnd': value.recordEnd,
    };
}

