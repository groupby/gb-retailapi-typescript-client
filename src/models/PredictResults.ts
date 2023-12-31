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
import type { FilterParameter } from './FilterParameter';
import {
    FilterParameterFromJSON,
    FilterParameterFromJSONTyped,
    FilterParameterToJSON,
} from './FilterParameter';

/**
 * Prediction result including list of recommendations based on provided inputs.
 * @export
 * @interface PredictResults
 */
export interface PredictResults {
    /**
     * Warnings collected with validation and Recommendations AI API issues.
     * @type {Array<object>}
     * @memberof PredictResults
     */
    warnings?: Array<object>;
    /**
     * Recommendations built by Recommendations AI model.
     * @type {Array<{ [key: string]: any; }>}
     * @memberof PredictResults
     */
    products?: Array<{ [key: string]: any; }>;
    /**
     * Recommendations built by Recommendations AI model.
     * @type {Array<{ [key: string]: any; }>}
     * @memberof PredictResults
     */
    records?: Array<{ [key: string]: any; }>;
    /**
     * Model Id used for predictions
     * @type {string}
     * @memberof PredictResults
     */
    modelId?: string;
    /**
     * Model Name used for predictions
     * @type {string}
     * @memberof PredictResults
     */
    modelName?: string;
    /**
     *   Currently supported values:
     *   `recommended-for-you`
     *   `others-you-may-like`,
     *   `frequently-bought-together`
     *   `page-optimization`
     *   `similar-items`,
     *   `buy-it-again`
     *   `on-sale-items`
     *   `recently-viewed`
     * 
     *   This field together with optimization_objective describe model metadata to use to control model training and
     *   serving. See https://cloud.google.com/retail/docs/models for more details.
     * @type {string}
     * @memberof PredictResults
     */
    modelType?: string;
    /**
     *   Currently supported values: `ctr`, `cvr`, `revenue-per-order`.
     * 
     *    If not specified, we choose default based on model type. Default depends on type of recommendation:
     *   `recommended-for-you` => `ctr`
     *   `others-you-may-like` => `ctr`
     *   `frequently-bought-together` => `revenue_per_order`
     * 
     *   This field together with modelType describe model metadata to use to control model training and serving.
     *   See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which
     *   combination of parameters are valid.
     * @type {string}
     * @memberof PredictResults
     */
    optimizationObjective?: string;
    /**
     * Filter set applied to the recommendation
     * @type {string}
     * @memberof PredictResults
     */
    filterSet?: string;
    /**
     * RawFilter applied to the recommendation
     * @type {string}
     * @memberof PredictResults
     */
    rawFilter?: string;
    /**
     * Filters applied to the recommendation
     * @type {Array<FilterParameter>}
     * @memberof PredictResults
     */
    filters?: Array<FilterParameter>;
    /**
     * 
     * @type {object}
     * @memberof PredictResults
     */
    metadata?: object;
}

/**
 * Check if a given object implements the PredictResults interface.
 */
export function instanceOfPredictResults(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PredictResultsFromJSON(json: any): PredictResults {
    return PredictResultsFromJSONTyped(json, false);
}

export function PredictResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictResults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'warnings': !exists(json, 'warnings') ? undefined : json['warnings'],
        'products': !exists(json, 'products') ? undefined : json['products'],
        'records': !exists(json, 'records') ? undefined : json['records'],
        'modelId': !exists(json, 'modelId') ? undefined : json['modelId'],
        'modelName': !exists(json, 'modelName') ? undefined : json['modelName'],
        'modelType': !exists(json, 'modelType') ? undefined : json['modelType'],
        'optimizationObjective': !exists(json, 'optimizationObjective') ? undefined : json['optimizationObjective'],
        'filterSet': !exists(json, 'filterSet') ? undefined : json['filterSet'],
        'rawFilter': !exists(json, 'rawFilter') ? undefined : json['rawFilter'],
        'filters': !exists(json, 'filters') ? undefined : ((json['filters'] as Array<any>).map(FilterParameterFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function PredictResultsToJSON(value?: PredictResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'warnings': value.warnings,
        'products': value.products,
        'records': value.records,
        'modelId': value.modelId,
        'modelName': value.modelName,
        'modelType': value.modelType,
        'optimizationObjective': value.optimizationObjective,
        'filterSet': value.filterSet,
        'rawFilter': value.rawFilter,
        'filters': value.filters === undefined ? undefined : ((value.filters as Array<any>).map(FilterParameterToJSON)),
        'metadata': value.metadata,
    };
}

