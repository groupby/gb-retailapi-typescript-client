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
export const SelectedRefinementTriggerType = {
    Range: 'RANGE',
    Value: 'VALUE',
    NavigationSelected: 'NAVIGATION_SELECTED'
} as const;
export type SelectedRefinementTriggerType = typeof SelectedRefinementTriggerType[keyof typeof SelectedRefinementTriggerType];


export function SelectedRefinementTriggerTypeFromJSON(json: any): SelectedRefinementTriggerType {
    return SelectedRefinementTriggerTypeFromJSONTyped(json, false);
}

export function SelectedRefinementTriggerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectedRefinementTriggerType {
    return json as SelectedRefinementTriggerType;
}

export function SelectedRefinementTriggerTypeToJSON(value?: SelectedRefinementTriggerType | null): any {
    return value as any;
}

