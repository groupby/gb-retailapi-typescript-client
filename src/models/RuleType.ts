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


/**
 * 
 * @export
 */
export const RuleType = {
    Regular: 'REGULAR',
    Experiment: 'EXPERIMENT'
} as const;
export type RuleType = typeof RuleType[keyof typeof RuleType];


export function RuleTypeFromJSON(json: any): RuleType {
    return RuleTypeFromJSONTyped(json, false);
}

export function RuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleType {
    return json as RuleType;
}

export function RuleTypeToJSON(value?: RuleType | null): any {
    return value as any;
}

