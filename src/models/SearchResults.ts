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
import type { AttributeSuggestion } from './AttributeSuggestion';
import {
    AttributeSuggestionFromJSON,
    AttributeSuggestionFromJSONTyped,
    AttributeSuggestionToJSON,
} from './AttributeSuggestion';
import type { SearchResultsStats } from './SearchResultsStats';
import {
    SearchResultsStatsFromJSON,
    SearchResultsStatsFromJSONTyped,
    SearchResultsStatsToJSON,
} from './SearchResultsStats';
import type { SearchTerms } from './SearchTerms';
import {
    SearchTermsFromJSON,
    SearchTermsFromJSONTyped,
    SearchTermsToJSON,
} from './SearchTerms';

/**
 * SAYT response. Contains list of suggestions ad base response information.
 * @export
 * @interface SearchResults
 */
export interface SearchResults {
    /**
     * 
     * @type {SearchResultsStats}
     * @memberof SearchResults
     */
    stats?: SearchResultsStats;
    /**
     * 
     * @type {Array<SearchTerms>}
     * @memberof SearchResults
     */
    searchTerms: Array<SearchTerms>;
    /**
     * Map with extended attributes which are returned in autocomplete response.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof SearchResults
     */
    extendedAttributes?: { [key: string]: Array<string>; };
    /**
     * SAYT response attributes. Contains list of direct matching attributes.
     * @type {{ [key: string]: AttributeSuggestion; }}
     * @memberof SearchResults
     */
    attributeResults?: { [key: string]: AttributeSuggestion; };
    /**
     * SiteFilter object used with request.
     * @type {string}
     * @memberof SearchResults
     */
    siteFilter?: string;
}

/**
 * Check if a given object implements the SearchResults interface.
 */
export function instanceOfSearchResults(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "searchTerms" in value;

    return isInstance;
}

export function SearchResultsFromJSON(json: any): SearchResults {
    return SearchResultsFromJSONTyped(json, false);
}

export function SearchResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stats': !exists(json, 'stats') ? undefined : SearchResultsStatsFromJSON(json['stats']),
        'searchTerms': ((json['searchTerms'] as Array<any>).map(SearchTermsFromJSON)),
        'extendedAttributes': !exists(json, 'extendedAttributes') ? undefined : json['extendedAttributes'],
        'attributeResults': !exists(json, 'attributeResults') ? undefined : (mapValues(json['attributeResults'], AttributeSuggestionFromJSON)),
        'siteFilter': !exists(json, 'siteFilter') ? undefined : json['siteFilter'],
    };
}

export function SearchResultsToJSON(value?: SearchResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stats': SearchResultsStatsToJSON(value.stats),
        'searchTerms': ((value.searchTerms as Array<any>).map(SearchTermsToJSON)),
        'extendedAttributes': value.extendedAttributes,
        'attributeResults': value.attributeResults === undefined ? undefined : (mapValues(value.attributeResults, AttributeSuggestionToJSON)),
        'siteFilter': value.siteFilter,
    };
}

