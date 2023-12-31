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
import type { Range } from './Range';
import {
    RangeFromJSON,
    RangeFromJSONTyped,
    RangeToJSON,
} from './Range';
import type { SelectedRefinementTriggerType } from './SelectedRefinementTriggerType';
import {
    SelectedRefinementTriggerTypeFromJSON,
    SelectedRefinementTriggerTypeFromJSONTyped,
    SelectedRefinementTriggerTypeToJSON,
} from './SelectedRefinementTriggerType';

/**
 * 
 * @export
 * @interface SelectedRefinementTrigger
 */
export interface SelectedRefinementTrigger {
    /**
     * 
     * @type {string}
     * @memberof SelectedRefinementTrigger
     */
    field: string;
    /**
     * 
     * @type {string}
     * @memberof SelectedRefinementTrigger
     */
    value: string;
    /**
     * 
     * @type {Range}
     * @memberof SelectedRefinementTrigger
     */
    range: Range;
    /**
     * 
     * @type {SelectedRefinementTriggerType}
     * @memberof SelectedRefinementTrigger
     */
    type: SelectedRefinementTriggerType;
}

/**
 * Check if a given object implements the SelectedRefinementTrigger interface.
 */
export function instanceOfSelectedRefinementTrigger(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "field" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "range" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function SelectedRefinementTriggerFromJSON(json: any): SelectedRefinementTrigger {
    return SelectedRefinementTriggerFromJSONTyped(json, false);
}

export function SelectedRefinementTriggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectedRefinementTrigger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'field': json['field'],
        'value': json['value'],
        'range': RangeFromJSON(json['range']),
        'type': SelectedRefinementTriggerTypeFromJSON(json['type']),
    };
}

export function SelectedRefinementTriggerToJSON(value?: SelectedRefinementTrigger | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'field': value.field,
        'value': value.value,
        'range': RangeToJSON(value.range),
        'type': SelectedRefinementTriggerTypeToJSON(value.type),
    };
}

