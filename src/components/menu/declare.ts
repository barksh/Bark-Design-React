/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Declare
 */

import { PropsBalancedBorderAddOn, PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn } from "../../util/props";

export type MenuProps =
    & {
    }
    & PropsNoBorderAddOn
    & PropsBalancedBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;

export type MenuItemProps =
    & {
        readonly title: string;
        readonly description?: string;
    }
    & PropsSizeAddon
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsClassNameAddOn;
