/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* User notification paging list parameters
*/
export class NotificationPageRo {
    /**
    * Read 1 Read, 0 Unread, Not Transferred means to query all
    */
    'isRead'?: NotificationPageRoIsReadEnum;
    /**
    * Notification Type
    */
    'notifyType'?: string;
    /**
    * The earliest notification line number
    */
    'rowNo'?: number;
    /**
    * Number of entries per page
    */
    'pageSize'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isRead",
            "baseName": "isRead",
            "type": "NotificationPageRoIsReadEnum",
            "format": "int32"
        },
        {
            "name": "notifyType",
            "baseName": "notifyType",
            "type": "string",
            "format": ""
        },
        {
            "name": "rowNo",
            "baseName": "rowNo",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return NotificationPageRo.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum NotificationPageRoIsReadEnum {
    NUMBER_null 
}
