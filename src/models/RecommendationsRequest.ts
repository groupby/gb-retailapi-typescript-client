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
import type { Filter } from './Filter';
import {
    FilterFromJSON,
    FilterFromJSONTyped,
    FilterToJSON,
} from './Filter';

/**
 * Object to wrap all recommendation request configs.
 * @export
 * @interface RecommendationsRequest
 */
export interface RecommendationsRequest {
    /**
     * 
     * @type {string}
     * @memberof RecommendationsRequest
     */
    collection: string;
    /**
     * 
     * @type {string}
     * @memberof RecommendationsRequest
     */
    visitorId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecommendationsRequest
     */
    limit?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecommendationsRequest
     */
    pageSize?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecommendationsRequest
     */
    eventType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecommendationsRequest
     */
    loginId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof RecommendationsRequest
     */
    productID?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof RecommendationsRequest
     */
    fields?: Array<string> | null;
    /**
     * 
     * @type {Array<Filter>}
     * @memberof RecommendationsRequest
     */
    filters?: Array<Filter> | null;
    /**
     * 
     * @type {string}
     * @memberof RecommendationsRequest
     */
    rawFilter?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecommendationsRequest
     */
    placement?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecommendationsRequest
     */
    name?: string | null;
    /**
     * The default is true. If strictFiltering true only products that are within the scope of the filter specified. If false, relax the filtering so that the response may contain other products that are outside the scope of the filtering.
     * @type {boolean}
     * @memberof RecommendationsRequest
     */
    strictFiltering?: boolean | null;
}

/**
 * Check if a given object implements the RecommendationsRequest interface.
 */
export function instanceOfRecommendationsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "collection" in value;

    return isInstance;
}

export function RecommendationsRequestFromJSON(json: any): RecommendationsRequest {
    return RecommendationsRequestFromJSONTyped(json, false);
}

export function RecommendationsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommendationsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collection': json['collection'],
        'visitorId': !exists(json, 'visitorId') ? undefined : json['visitorId'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'eventType': !exists(json, 'eventType') ? undefined : json['eventType'],
        'loginId': !exists(json, 'loginId') ? undefined : json['loginId'],
        'productID': !exists(json, 'productID') ? undefined : json['productID'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
        'filters': !exists(json, 'filters') ? undefined : (json['filters'] === null ? null : (json['filters'] as Array<any>).map(FilterFromJSON)),
        'rawFilter': !exists(json, 'rawFilter') ? undefined : json['rawFilter'],
        'placement': !exists(json, 'placement') ? undefined : json['placement'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'strictFiltering': !exists(json, 'strictFiltering') ? undefined : json['strictFiltering'],
    };
}

export function RecommendationsRequestToJSON(value?: RecommendationsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collection': value.collection,
        'visitorId': value.visitorId,
        'limit': value.limit,
        'pageSize': value.pageSize,
        'eventType': value.eventType,
        'loginId': value.loginId,
        'productID': value.productID,
        'fields': value.fields,
        'filters': value.filters === undefined ? undefined : (value.filters === null ? null : (value.filters as Array<any>).map(FilterToJSON)),
        'rawFilter': value.rawFilter,
        'placement': value.placement,
        'name': value.name,
        'strictFiltering': value.strictFiltering,
    };
}

