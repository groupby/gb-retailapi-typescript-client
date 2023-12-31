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
import type { CustomParameterTrigger } from './CustomParameterTrigger';
import {
    CustomParameterTriggerFromJSON,
    CustomParameterTriggerFromJSONTyped,
    CustomParameterTriggerToJSON,
} from './CustomParameterTrigger';
import type { QueryPatternTrigger } from './QueryPatternTrigger';
import {
    QueryPatternTriggerFromJSON,
    QueryPatternTriggerFromJSONTyped,
    QueryPatternTriggerToJSON,
} from './QueryPatternTrigger';
import type { SelectedRefinementTrigger } from './SelectedRefinementTrigger';
import {
    SelectedRefinementTriggerFromJSON,
    SelectedRefinementTriggerFromJSONTyped,
    SelectedRefinementTriggerToJSON,
} from './SelectedRefinementTrigger';

/**
 * 
 * @export
 * @interface TriggerSet
 */
export interface TriggerSet {
    /**
     * Query pattern triggers.
     * @type {Array<QueryPatternTrigger>}
     * @memberof TriggerSet
     */
    queryPatternTriggers: Array<QueryPatternTrigger>;
    /**
     * Selected refinement triggers.
     * @type {Array<SelectedRefinementTrigger>}
     * @memberof TriggerSet
     */
    selectedRefinementTriggers: Array<SelectedRefinementTrigger>;
    /**
     * Custom parameter triggers.
     * @type {Array<CustomParameterTrigger>}
     * @memberof TriggerSet
     */
    customParameterTriggers: Array<CustomParameterTrigger>;
}

/**
 * Check if a given object implements the TriggerSet interface.
 */
export function instanceOfTriggerSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "queryPatternTriggers" in value;
    isInstance = isInstance && "selectedRefinementTriggers" in value;
    isInstance = isInstance && "customParameterTriggers" in value;

    return isInstance;
}

export function TriggerSetFromJSON(json: any): TriggerSet {
    return TriggerSetFromJSONTyped(json, false);
}

export function TriggerSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): TriggerSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'queryPatternTriggers': ((json['queryPatternTriggers'] as Array<any>).map(QueryPatternTriggerFromJSON)),
        'selectedRefinementTriggers': ((json['selectedRefinementTriggers'] as Array<any>).map(SelectedRefinementTriggerFromJSON)),
        'customParameterTriggers': ((json['customParameterTriggers'] as Array<any>).map(CustomParameterTriggerFromJSON)),
    };
}

export function TriggerSetToJSON(value?: TriggerSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'queryPatternTriggers': ((value.queryPatternTriggers as Array<any>).map(QueryPatternTriggerToJSON)),
        'selectedRefinementTriggers': ((value.selectedRefinementTriggers as Array<any>).map(SelectedRefinementTriggerToJSON)),
        'customParameterTriggers': ((value.customParameterTriggers as Array<any>).map(CustomParameterTriggerToJSON)),
    };
}

