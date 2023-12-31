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
 * Information regarding a product in the proprietary Group By API format.
 * @export
 * @interface RecordDto
 */
export interface RecordDto {
    /**
     * Identifier of the record as an MD5 hash.
     * @type {string}
     * @memberof RecordDto
     */
    id?: string;
    /**
     * Logical URL of the record.
     * @type {string}
     * @memberof RecordDto
     */
    u?: string;
    /**
     * Title of the record.
     * @type {string}
     * @memberof RecordDto
     */
    t?: string;
    /**
     * Collection the record was queried from or resides.
     * @type {string}
     * @memberof RecordDto
     */
    collection?: string;
    /**
     * All other metadata, read fields, the record has.
     * @type {{ [key: string]: any; }}
     * @memberof RecordDto
     */
    allMeta?: { [key: string]: any; };
}

/**
 * Check if a given object implements the RecordDto interface.
 */
export function instanceOfRecordDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecordDtoFromJSON(json: any): RecordDto {
    return RecordDtoFromJSONTyped(json, false);
}

export function RecordDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '_id') ? undefined : json['_id'],
        'u': !exists(json, '_u') ? undefined : json['_u'],
        't': !exists(json, '_t') ? undefined : json['_t'],
        'collection': !exists(json, 'collection') ? undefined : json['collection'],
        'allMeta': !exists(json, 'allMeta') ? undefined : json['allMeta'],
    };
}

export function RecordDtoToJSON(value?: RecordDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_id': value.id,
        '_u': value.u,
        '_t': value.t,
        'collection': value.collection,
        'allMeta': value.allMeta,
    };
}

