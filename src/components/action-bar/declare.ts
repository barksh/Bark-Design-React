/**
 * @author WMXPY
 * @namespace Components_ActionBar
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn } from "../../util/props";

export type ActionBarProps =
    & {
    }
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
