/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type MenuProps =
    & {
    }
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
