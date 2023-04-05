/**
 * @author WMXPY
 * @namespace Components_Pagination
 * @description Declare
 */

import { PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type PaginationProps =
    & {
        readonly currentPage: number;
        readonly pageCount: number;
        readonly maxPageCount?: number;

        readonly onChange?: (page: number) => void;
    }
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
