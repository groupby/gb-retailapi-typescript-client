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
/**
 * Information about Rule based Experiment.
 * @export
 * @interface Experiment
 */
export interface Experiment {
    /**
     * Experiment id.
     * @type {string}
     * @memberof Experiment
     */
    experimentId?: string;
    /**
     * Experiment variant.
     * @type {string}
     * @memberof Experiment
     */
    experimentVariant?: string;
}

/**
 * Check if a given object implements the Experiment interface.
 */
export function instanceOfExperiment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExperimentFromJSON(json: any): Experiment {
    return ExperimentFromJSONTyped(json, false);
}

export function ExperimentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Experiment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'experimentId': !exists(json, 'experimentId') ? undefined : json['experimentId'],
        'experimentVariant': !exists(json, 'experimentVariant') ? undefined : json['experimentVariant'],
    };
}

export function ExperimentToJSON(value?: Experiment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'experimentId': value.experimentId,
        'experimentVariant': value.experimentVariant,
    };
}
