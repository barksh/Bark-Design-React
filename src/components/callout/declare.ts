/**
 * @author WMXPY
 * @namespace Components_Callout
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon, PropsWidthHeightAddOn } from "../../util/props";

export type CalloutProps =
    & {
    }
    & PropsWidthHeightAddOn
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
