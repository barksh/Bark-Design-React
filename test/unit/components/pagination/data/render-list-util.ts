/**
 * @author WMXPY
 * @namespace Components_Pagination_Data
 * @description Render List
 * @override Unit Test Util
 */

import { PaginationElement } from "../../../../../src/components/pagination/data/render-list";

export const flatPageElements = (elements: PaginationElement[]): number[] => {

    return elements.map((element: PaginationElement) => {
        if (element.type === 'page') {
            return element.value;
        }
        return 0;
    });
};
