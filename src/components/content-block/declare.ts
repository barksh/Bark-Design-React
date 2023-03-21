/**
 * @author WMXPY
 * @namespace Components_ContentBlock
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsLoadingAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type ContentBlockProps =
    & {
    }
    & PropsLoadingAddOn
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
