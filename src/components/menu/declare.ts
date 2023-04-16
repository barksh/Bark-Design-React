/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Declare
 */

import { PropsBalancedBorderAddOn, PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsNoSeparatorAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn, PropsWidthHeightAddOn } from "../../util/props";

export type MenuProps =
    & {
    }
    & PropsNoBorderAddOn
    & PropsNoSeparatorAddOn
    & PropsBalancedBorderAddOn
    & PropsSizeAddon
    & PropsMaximizeAddOn
    & PropsWidthHeightAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn;

export type MenuItemProps =
    & {
        readonly title: string;
        readonly description?: string;

        readonly onClick?: () => void;

        readonly level?: number;
    }
    & PropsNoSeparatorAddOn
    & PropsSizeAddon
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn;

export type MenuSeparatorProps =
    & {
    }
    & PropsSizeAddon
    & PropsClassNameAddOn;

export type MenuSpacingProps =
    & {
    }
    & PropsSizeAddon
    & PropsClassNameAddOn;
