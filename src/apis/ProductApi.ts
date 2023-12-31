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


import * as runtime from '../runtime';
import type {
  ErrorDto,
  ProductDto,
} from '../models/index';
import {
    ErrorDtoFromJSON,
    ErrorDtoToJSON,
    ProductDtoFromJSON,
    ProductDtoToJSON,
} from '../models/index';

export interface GetByProductIdsRequest {
    collection: string;
    productId: string;
    xGroupbyCustomerId: string;
    variantIds?: Array<string> | null;
}

/**
 * 
 */
export class ProductApi extends runtime.BaseAPI {

    /**
     * Perform a product search against the GroupBy Retail Search API.
     * Provided product search functionality
     */
    async getByProductIdsRaw(requestParameters: GetByProductIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductDto>> {
        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling getByProductIds.');
        }

        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getByProductIds.');
        }

        if (requestParameters.xGroupbyCustomerId === null || requestParameters.xGroupbyCustomerId === undefined) {
            throw new runtime.RequiredError('xGroupbyCustomerId','Required parameter requestParameters.xGroupbyCustomerId was null or undefined when calling getByProductIds.');
        }

        const queryParameters: any = {};

        if (requestParameters.collection !== undefined) {
            queryParameters['collection'] = requestParameters.collection;
        }

        if (requestParameters.productId !== undefined) {
            queryParameters['productId'] = requestParameters.productId;
        }

        if (requestParameters.variantIds) {
            queryParameters['variantIds'] = requestParameters.variantIds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xGroupbyCustomerId !== undefined && requestParameters.xGroupbyCustomerId !== null) {
            headerParameters['X-Groupby-Customer-Id'] = String(requestParameters.xGroupbyCustomerId);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ClientKey authentication
        }

        const response = await this.request({
            path: `/api/search/product`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductDtoFromJSON(jsonValue));
    }

    /**
     * Perform a product search against the GroupBy Retail Search API.
     * Provided product search functionality
     */
    async getByProductIds(requestParameters: GetByProductIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductDto> {
        const response = await this.getByProductIdsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
