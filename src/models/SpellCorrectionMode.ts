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
export const SpellCorrectionMode = {
    Auto: 'AUTO',
    SuggestionOnly: 'SUGGESTION_ONLY'
} as const;
export type SpellCorrectionMode = typeof SpellCorrectionMode[keyof typeof SpellCorrectionMode];


export function SpellCorrectionModeFromJSON(json: any): SpellCorrectionMode {
    return SpellCorrectionModeFromJSONTyped(json, false);
}

export function SpellCorrectionModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpellCorrectionMode {
    return json as SpellCorrectionMode;
}

export function SpellCorrectionModeToJSON(value?: SpellCorrectionMode | null): any {
    return value as any;
}

