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
import type { FulfillmentInfo } from './FulfillmentInfo';
import {
    FulfillmentInfoFromJSON,
    FulfillmentInfoFromJSONTyped,
    FulfillmentInfoToJSON,
} from './FulfillmentInfo';
import type { Image } from './Image';
import {
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './Image';
import type { ProductCustomAttribute } from './ProductCustomAttribute';
import {
    ProductCustomAttributeFromJSON,
    ProductCustomAttributeFromJSONTyped,
    ProductCustomAttributeToJSON,
} from './ProductCustomAttribute';
import type { ProductDtoAudience } from './ProductDtoAudience';
import {
    ProductDtoAudienceFromJSON,
    ProductDtoAudienceFromJSONTyped,
    ProductDtoAudienceToJSON,
} from './ProductDtoAudience';
import type { ProductDtoAvailableTime } from './ProductDtoAvailableTime';
import {
    ProductDtoAvailableTimeFromJSON,
    ProductDtoAvailableTimeFromJSONTyped,
    ProductDtoAvailableTimeToJSON,
} from './ProductDtoAvailableTime';
import type { ProductDtoColorInfo } from './ProductDtoColorInfo';
import {
    ProductDtoColorInfoFromJSON,
    ProductDtoColorInfoFromJSONTyped,
    ProductDtoColorInfoToJSON,
} from './ProductDtoColorInfo';
import type { ProductDtoPriceInfo } from './ProductDtoPriceInfo';
import {
    ProductDtoPriceInfoFromJSON,
    ProductDtoPriceInfoFromJSONTyped,
    ProductDtoPriceInfoToJSON,
} from './ProductDtoPriceInfo';
import type { ProductDtoPublishTime } from './ProductDtoPublishTime';
import {
    ProductDtoPublishTimeFromJSON,
    ProductDtoPublishTimeFromJSONTyped,
    ProductDtoPublishTimeToJSON,
} from './ProductDtoPublishTime';
import type { ProductDtoRating } from './ProductDtoRating';
import {
    ProductDtoRatingFromJSON,
    ProductDtoRatingFromJSONTyped,
    ProductDtoRatingToJSON,
} from './ProductDtoRating';
import type { ProductDtoRetrievableFields } from './ProductDtoRetrievableFields';
import {
    ProductDtoRetrievableFieldsFromJSON,
    ProductDtoRetrievableFieldsFromJSONTyped,
    ProductDtoRetrievableFieldsToJSON,
} from './ProductDtoRetrievableFields';
import type { Promotion } from './Promotion';
import {
    PromotionFromJSON,
    PromotionFromJSONTyped,
    PromotionToJSON,
} from './Promotion';

/**
 * Product representation.
 * @export
 * @interface ProductDto
 */
export interface ProductDto {
    /**
     * Relative path to product in Google Retail system.
     * @type {string}
     * @memberof ProductDto
     */
    name?: string;
    /**
     * Product id in Google Retail system.
     * @type {string}
     * @memberof ProductDto
     */
    id?: string;
    /**
     * Product type. Possible values: PRIMARY, VARIANT. If the product has variant list and the request specifies the variantIds, requested variants will be the first in the response.
     * @type {string}
     * @memberof ProductDto
     */
    type?: string;
    /**
     * Product ID that is primary in relation to the current one
     * @type {string}
     * @memberof ProductDto
     */
    primaryProductId?: string;
    /**
     * The of the collection members when product type is COLLECTION
     * @type {Array<string>}
     * @memberof ProductDto
     */
    collectionMemberIds?: Array<string>;
    /**
     * Global Trade Item Number can be used by a company to uniquely identify all of its trade items.GTIN defines trade items as products or services that are priced, ordered or invoiced at any point in the supply chain.
     * @type {string}
     * @memberof ProductDto
     */
    gtin?: string;
    /**
     * Product categories (array).
     * @type {Array<string>}
     * @memberof ProductDto
     */
    categories?: Array<string>;
    /**
     * Product title.
     * @type {string}
     * @memberof ProductDto
     */
    title?: string;
    /**
     * Product brands.
     * @type {Array<string>}
     * @memberof ProductDto
     */
    brands?: Array<string>;
    /**
     * Product description.
     * @type {string}
     * @memberof ProductDto
     */
    description?: string;
    /**
     * Language of the title/description and other string attributes. Use language tags defined by [BCP 47][https://www.rfc-editor.org/rfc/bcp/bcp47.txt]. For product search this field is in use. It defaults to 'en-US' if unset.
     * @type {string}
     * @memberof ProductDto
     */
    languageCode?: string;
    /**
     * Highly encouraged. Extra product attributes to be included. For example, for products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the attributes here. Features that can take on one of a limited number of possible values. Two types of features can be set are: Textual features. some examples would be the brand/maker of a product, or country of a customer. Numerical features. Some examples would be the height/weight of a product, or age of a customer.  Max entries count: 200. Length limit of 128 characters.
     * @type {{ [key: string]: ProductCustomAttribute; }}
     * @memberof ProductDto
     */
    attributes?: { [key: string]: ProductCustomAttribute; };
    /**
     * Product tags (array).
     * @type {Array<string>}
     * @memberof ProductDto
     */
    tags?: Array<string>;
    /**
     * 
     * @type {ProductDtoPriceInfo}
     * @memberof ProductDto
     */
    priceInfo?: ProductDtoPriceInfo;
    /**
     * 
     * @type {ProductDtoRating}
     * @memberof ProductDto
     */
    rating?: ProductDtoRating;
    /**
     * 
     * @type {ProductDtoAvailableTime}
     * @memberof ProductDto
     */
    availableTime?: ProductDtoAvailableTime;
    /**
     * The online availability of the product. Default to IN_STOCK
     * @type {string}
     * @memberof ProductDto
     */
    availability?: string;
    /**
     * The available quantity of the item.
     * @type {number}
     * @memberof ProductDto
     */
    availableQuantity?: number;
    /**
     * Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods.
     * @type {Array<FulfillmentInfo>}
     * @memberof ProductDto
     */
    fulfillmentInfos?: Array<FulfillmentInfo>;
    /**
     * Link to the appropriate product.
     * @type {string}
     * @memberof ProductDto
     */
    uri?: string;
    /**
     * Product Image.
     * @type {Array<Image>}
     * @memberof ProductDto
     */
    images?: Array<Image>;
    /**
     * 
     * @type {ProductDtoAudience}
     * @memberof ProductDto
     */
    audience?: ProductDtoAudience;
    /**
     * 
     * @type {ProductDtoColorInfo}
     * @memberof ProductDto
     */
    colorInfo?: ProductDtoColorInfo;
    /**
     * Product sizes (array).
     * @type {Array<string>}
     * @memberof ProductDto
     */
    sizes?: Array<string>;
    /**
     * The material of the product. For example, 'leather', 'wooden'. A maximum of 20 values are allowed. Length limit of 128 characters
     * @type {Array<string>}
     * @memberof ProductDto
     */
    materials?: Array<string>;
    /**
     * The pattern or graphic print of the product. For example, 'striped', 'polka dot', 'paisley'. A maximum of 20 values are allowed per product. Length limit of 128 characters.
     * @type {Array<string>}
     * @memberof ProductDto
     */
    patterns?: Array<string>;
    /**
     * The condition of the product. Strongly encouraged to use the standardvalues: 'new', 'refurbished', 'used'. A maximum of 5 values are allowed per product. Length limit of 128 characters.
     * @type {Array<string>}
     * @memberof ProductDto
     */
    conditions?: Array<string>;
    /**
     * 
     * @type {ProductDtoPublishTime}
     * @memberof ProductDto
     */
    publishTime?: ProductDtoPublishTime;
    /**
     * 
     * @type {ProductDtoRetrievableFields}
     * @memberof ProductDto
     */
    retrievableFields?: ProductDtoRetrievableFields;
    /**
     * The promotions applied to the product. A maximum of 10 values are allowed per product.
     * @type {Array<Promotion>}
     * @memberof ProductDto
     */
    promotions?: Array<Promotion>;
    /**
     * If the product has variant list and the request specifies the variantIds, requested variants will be the first in the response.
     * @type {Array<ProductDto>}
     * @memberof ProductDto
     */
    variants?: Array<ProductDto>;
}

/**
 * Check if a given object implements the ProductDto interface.
 */
export function instanceOfProductDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductDtoFromJSON(json: any): ProductDto {
    return ProductDtoFromJSONTyped(json, false);
}

export function ProductDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'primaryProductId': !exists(json, 'primaryProductId') ? undefined : json['primaryProductId'],
        'collectionMemberIds': !exists(json, 'collectionMemberIds') ? undefined : json['collectionMemberIds'],
        'gtin': !exists(json, 'gtin') ? undefined : json['gtin'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'brands': !exists(json, 'brands') ? undefined : json['brands'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'languageCode': !exists(json, 'languageCode') ? undefined : json['languageCode'],
        'attributes': !exists(json, 'attributes') ? undefined : (mapValues(json['attributes'], ProductCustomAttributeFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'priceInfo': !exists(json, 'priceInfo') ? undefined : ProductDtoPriceInfoFromJSON(json['priceInfo']),
        'rating': !exists(json, 'rating') ? undefined : ProductDtoRatingFromJSON(json['rating']),
        'availableTime': !exists(json, 'availableTime') ? undefined : ProductDtoAvailableTimeFromJSON(json['availableTime']),
        'availability': !exists(json, 'availability') ? undefined : json['availability'],
        'availableQuantity': !exists(json, 'availableQuantity') ? undefined : json['availableQuantity'],
        'fulfillmentInfos': !exists(json, 'fulfillmentInfos') ? undefined : ((json['fulfillmentInfos'] as Array<any>).map(FulfillmentInfoFromJSON)),
        'uri': !exists(json, 'uri') ? undefined : json['uri'],
        'images': !exists(json, 'images') ? undefined : ((json['images'] as Array<any>).map(ImageFromJSON)),
        'audience': !exists(json, 'audience') ? undefined : ProductDtoAudienceFromJSON(json['audience']),
        'colorInfo': !exists(json, 'colorInfo') ? undefined : ProductDtoColorInfoFromJSON(json['colorInfo']),
        'sizes': !exists(json, 'sizes') ? undefined : json['sizes'],
        'materials': !exists(json, 'materials') ? undefined : json['materials'],
        'patterns': !exists(json, 'patterns') ? undefined : json['patterns'],
        'conditions': !exists(json, 'conditions') ? undefined : json['conditions'],
        'publishTime': !exists(json, 'publishTime') ? undefined : ProductDtoPublishTimeFromJSON(json['publishTime']),
        'retrievableFields': !exists(json, 'retrievableFields') ? undefined : ProductDtoRetrievableFieldsFromJSON(json['retrievableFields']),
        'promotions': !exists(json, 'promotions') ? undefined : ((json['promotions'] as Array<any>).map(PromotionFromJSON)),
        'variants': !exists(json, 'variants') ? undefined : ((json['variants'] as Array<any>).map(ProductDtoFromJSON)),
    };
}

export function ProductDtoToJSON(value?: ProductDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'id': value.id,
        'type': value.type,
        'primaryProductId': value.primaryProductId,
        'collectionMemberIds': value.collectionMemberIds,
        'gtin': value.gtin,
        'categories': value.categories,
        'title': value.title,
        'brands': value.brands,
        'description': value.description,
        'languageCode': value.languageCode,
        'attributes': value.attributes === undefined ? undefined : (mapValues(value.attributes, ProductCustomAttributeToJSON)),
        'tags': value.tags,
        'priceInfo': ProductDtoPriceInfoToJSON(value.priceInfo),
        'rating': ProductDtoRatingToJSON(value.rating),
        'availableTime': ProductDtoAvailableTimeToJSON(value.availableTime),
        'availability': value.availability,
        'availableQuantity': value.availableQuantity,
        'fulfillmentInfos': value.fulfillmentInfos === undefined ? undefined : ((value.fulfillmentInfos as Array<any>).map(FulfillmentInfoToJSON)),
        'uri': value.uri,
        'images': value.images === undefined ? undefined : ((value.images as Array<any>).map(ImageToJSON)),
        'audience': ProductDtoAudienceToJSON(value.audience),
        'colorInfo': ProductDtoColorInfoToJSON(value.colorInfo),
        'sizes': value.sizes,
        'materials': value.materials,
        'patterns': value.patterns,
        'conditions': value.conditions,
        'publishTime': ProductDtoPublishTimeToJSON(value.publishTime),
        'retrievableFields': ProductDtoRetrievableFieldsToJSON(value.retrievableFields),
        'promotions': value.promotions === undefined ? undefined : ((value.promotions as Array<any>).map(PromotionToJSON)),
        'variants': value.variants === undefined ? undefined : ((value.variants as Array<any>).map(ProductDtoToJSON)),
    };
}
