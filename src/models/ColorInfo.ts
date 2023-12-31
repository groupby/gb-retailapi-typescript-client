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
 * Product color info.
 * @export
 * @interface ColorInfo
 */
export interface ColorInfo {
    /**
     * Product color families (array).
     * @type {Array<string>}
     * @memberof ColorInfo
     */
    colorFamilies?: Array<string>;
    /**
     * Product color (array).
     * @type {Array<string>}
     * @memberof ColorInfo
     */
    colors?: Array<string>;
}

/**
 * Check if a given object implements the ColorInfo interface.
 */
export function instanceOfColorInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ColorInfoFromJSON(json: any): ColorInfo {
    return ColorInfoFromJSONTyped(json, false);
}

export function ColorInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColorInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'colorFamilies': !exists(json, 'colorFamilies') ? undefined : json['colorFamilies'],
        'colors': !exists(json, 'colors') ? undefined : json['colors'],
    };
}

export function ColorInfoToJSON(value?: ColorInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'colorFamilies': value.colorFamilies,
        'colors': value.colors,
    };
}

