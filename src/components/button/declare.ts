/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsDisabledAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsNoPaddingAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn } from "../../util/props";

export type ButtonProps =
    & {
        readonly description?: string;
        readonly onClick?: () => any;

        readonly flex?: number;
        readonly square?: boolean;
        readonly fitContent?: boolean;

        readonly actionPrefix?: boolean;
        readonly actionSuffix?: boolean;

        readonly keepVisible?: boolean;

        readonly noPrefixPadding?: boolean;
        readonly noSuffixPadding?: boolean;
    }
    & PropsNoBorderAddOn
    & PropsNoPaddingAddOn
    & PropsMaximizeAddOn
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsDisabledAddOn
    & PropsChildrenAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
