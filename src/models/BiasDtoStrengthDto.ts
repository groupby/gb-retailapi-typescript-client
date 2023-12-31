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
 * The amount the bias will affect the search results.
 * @export
 */
export const BiasDtoStrengthDto = {
    AbsoluteIncrease: 'ABSOLUTE_INCREASE',
    StrongIncrease: 'STRONG_INCREASE',
    MediumIncrease: 'MEDIUM_INCREASE',
    WeakIncrease: 'WEAK_INCREASE',
    LeaveUnchanged: 'LEAVE_UNCHANGED',
    WeakDecrease: 'WEAK_DECREASE',
    MediumDecrease: 'MEDIUM_DECREASE',
    StrongDecrease: 'STRONG_DECREASE',
    AbsoluteDecrease: 'ABSOLUTE_DECREASE'
} as const;
export type BiasDtoStrengthDto = typeof BiasDtoStrengthDto[keyof typeof BiasDtoStrengthDto];


export function BiasDtoStrengthDtoFromJSON(json: any): BiasDtoStrengthDto {
    return BiasDtoStrengthDtoFromJSONTyped(json, false);
}

export function BiasDtoStrengthDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BiasDtoStrengthDto {
    return json as BiasDtoStrengthDto;
}

export function BiasDtoStrengthDtoToJSON(value?: BiasDtoStrengthDto | null): any {
    return value as any;
}

