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
import type { PriceInfoPriceEffectiveTime } from './PriceInfoPriceEffectiveTime';
import {
    PriceInfoPriceEffectiveTimeFromJSON,
    PriceInfoPriceEffectiveTimeFromJSONTyped,
    PriceInfoPriceEffectiveTimeToJSON,
} from './PriceInfoPriceEffectiveTime';
import type { PriceInfoPriceExpireTime } from './PriceInfoPriceExpireTime';
import {
    PriceInfoPriceExpireTimeFromJSON,
    PriceInfoPriceExpireTimeFromJSONTyped,
    PriceInfoPriceExpireTimeToJSON,
} from './PriceInfoPriceExpireTime';
import type { PriceInfoPriceRange } from './PriceInfoPriceRange';
import {
    PriceInfoPriceRangeFromJSON,
    PriceInfoPriceRangeFromJSONTyped,
    PriceInfoPriceRangeToJSON,
} from './PriceInfoPriceRange';

/**
 * 
 * @export
 * @interface ProductDtoPriceInfo
 */
export interface ProductDtoPriceInfo {
    /**
     * Currency code.
     * @type {string}
     * @memberof ProductDtoPriceInfo
     */
    currencyCode?: string;
    /**
     * Price value.
     * @type {number}
     * @memberof ProductDtoPriceInfo
     */
    price?: number;
    /**
     * Original price value.
     * @type {number}
     * @memberof ProductDtoPriceInfo
     */
    originalPrice?: number;
    /**
     * Cost
     * @type {number}
     * @memberof ProductDtoPriceInfo
     */
    cost?: number;
    /**
     * 
     * @type {PriceInfoPriceEffectiveTime}
     * @memberof ProductDtoPriceInfo
     */
    priceEffectiveTime?: PriceInfoPriceEffectiveTime;
    /**
     * 
     * @type {PriceInfoPriceExpireTime}
     * @memberof ProductDtoPriceInfo
     */
    priceExpireTime?: PriceInfoPriceExpireTime;
    /**
     * 
     * @type {PriceInfoPriceRange}
     * @memberof ProductDtoPriceInfo
     */
    priceRange?: PriceInfoPriceRange;
}

/**
 * Check if a given object implements the ProductDtoPriceInfo interface.
 */
export function instanceOfProductDtoPriceInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductDtoPriceInfoFromJSON(json: any): ProductDtoPriceInfo {
    return ProductDtoPriceInfoFromJSONTyped(json, false);
}

export function ProductDtoPriceInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductDtoPriceInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'originalPrice': !exists(json, 'originalPrice') ? undefined : json['originalPrice'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
        'priceEffectiveTime': !exists(json, 'priceEffectiveTime') ? undefined : PriceInfoPriceEffectiveTimeFromJSON(json['priceEffectiveTime']),
        'priceExpireTime': !exists(json, 'priceExpireTime') ? undefined : PriceInfoPriceExpireTimeFromJSON(json['priceExpireTime']),
        'priceRange': !exists(json, 'priceRange') ? undefined : PriceInfoPriceRangeFromJSON(json['priceRange']),
    };
}

export function ProductDtoPriceInfoToJSON(value?: ProductDtoPriceInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currencyCode': value.currencyCode,
        'price': value.price,
        'originalPrice': value.originalPrice,
        'cost': value.cost,
        'priceEffectiveTime': PriceInfoPriceEffectiveTimeToJSON(value.priceEffectiveTime),
        'priceExpireTime': PriceInfoPriceExpireTimeToJSON(value.priceExpireTime),
        'priceRange': PriceInfoPriceRangeToJSON(value.priceRange),
    };
}

