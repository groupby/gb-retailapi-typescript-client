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
 * Error returned by the API.
 * @export
 * @interface RecommendationsErrorResponse
 */
export interface RecommendationsErrorResponse {
    /**
     * Identifier used for tracking purposes.
     * @type {string}
     * @memberof RecommendationsErrorResponse
     */
    trackingId?: string;
    /**
     * HTTP method of the API call which produced the error.
     * @type {string}
     * @memberof RecommendationsErrorResponse
     */
    method?: string;
    /**
     * HTTP path of the API call which produced the error.
     * @type {string}
     * @memberof RecommendationsErrorResponse
     */
    path?: string;
    /**
     * Error message.
     * @type {string}
     * @memberof RecommendationsErrorResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the RecommendationsErrorResponse interface.
 */
export function instanceOfRecommendationsErrorResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecommendationsErrorResponseFromJSON(json: any): RecommendationsErrorResponse {
    return RecommendationsErrorResponseFromJSONTyped(json, false);
}

export function RecommendationsErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommendationsErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'trackingId': !exists(json, 'trackingId') ? undefined : json['trackingId'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function RecommendationsErrorResponseToJSON(value?: RecommendationsErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'trackingId': value.trackingId,
        'method': value.method,
        'path': value.path,
        'message': value.message,
    };
}

