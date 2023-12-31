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
export const ZoneType = {
    Query: 'QUERY',
    Content: 'CONTENT',
    RichContent: 'RICH_CONTENT',
    ExpectQuery: 'EXPECT_QUERY',
    GeneratedContent: 'GENERATED_CONTENT'
} as const;
export type ZoneType = typeof ZoneType[keyof typeof ZoneType];


export function ZoneTypeFromJSON(json: any): ZoneType {
    return ZoneTypeFromJSONTyped(json, false);
}

export function ZoneTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZoneType {
    return json as ZoneType;
}

export function ZoneTypeToJSON(value?: ZoneType | null): any {
    return value as any;
}

