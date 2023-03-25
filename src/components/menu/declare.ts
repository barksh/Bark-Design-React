/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Declare
 */

import { PropsBalancedBorderAddOn, PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

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
    }
    & PropsChildrenAddOn;
