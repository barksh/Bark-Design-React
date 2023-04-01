/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Declare
 */

import { PropsBalancedBorderAddOn, PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn, PropsWidthHeightAddOn } from "../../util/props";

export type MenuProps =
    & {
    }
    & PropsNoBorderAddOn
    & PropsBalancedBorderAddOn
    & PropsMaximizeAddOn
    & PropsWidthHeightAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;

export type MenuItemProps =
    & {
        readonly title: string;
        readonly description?: string;

        readonly onClick?: () => void;

        readonly level?: number;
    }
    & PropsSizeAddon
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn;
