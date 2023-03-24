/**
 * @author WMXPY
 * @namespace Components_ContentBlock
 * @description Declare
 */

import { PropsBalancedBorderAddOn, PropsChildrenAddOn, PropsClassNameAddOn, PropsLoadingAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type ContentBlockProps =
    & {
    }
    & PropsLoadingAddOn
    & PropsBalancedBorderAddOn
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
