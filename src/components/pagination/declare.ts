/**
 * @author WMXPY
 * @namespace Components_Pagination
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn } from "../../util/props";

export type PaginationProps =
    & {
    }
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
