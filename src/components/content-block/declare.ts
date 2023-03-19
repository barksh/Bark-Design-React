/**
 * @author WMXPY
 * @namespace Components_ContentBlock
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsLoadingAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type ContentBlockProps =
    & {
        readonly width?: string | number;
        readonly height?: string | number;
    }
    & PropsLoadingAddOn
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
