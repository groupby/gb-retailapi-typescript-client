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
import type { QueryPatternTriggerType } from './QueryPatternTriggerType';
import {
    QueryPatternTriggerTypeFromJSON,
    QueryPatternTriggerTypeFromJSONTyped,
    QueryPatternTriggerTypeToJSON,
} from './QueryPatternTriggerType';

/**
 * 
 * @export
 * @interface QueryPatternTrigger
 */
export interface QueryPatternTrigger {
    /**
     * 
     * @type {QueryPatternTriggerType}
     * @memberof QueryPatternTrigger
     */
    type: QueryPatternTriggerType;
    /**
     * 
     * @type {Array<string>}
     * @memberof QueryPatternTrigger
     */
    values?: Array<string>;
    /**
     * 
     * @type {Array<object>}
     * @memberof QueryPatternTrigger
     */
    patterns?: Array<object>;
}

/**
 * Check if a given object implements the QueryPatternTrigger interface.
 */
export function instanceOfQueryPatternTrigger(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function QueryPatternTriggerFromJSON(json: any): QueryPatternTrigger {
    return QueryPatternTriggerFromJSONTyped(json, false);
}

export function QueryPatternTriggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryPatternTrigger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': QueryPatternTriggerTypeFromJSON(json['type']),
        'values': !exists(json, 'values') ? undefined : json['values'],
        'patterns': !exists(json, 'patterns') ? undefined : json['patterns'],
    };
}

export function QueryPatternTriggerToJSON(value?: QueryPatternTrigger | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': QueryPatternTriggerTypeToJSON(value.type),
        'values': value.values,
        'patterns': value.patterns,
    };
}

