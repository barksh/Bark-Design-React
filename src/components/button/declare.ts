/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn } from "../../util/props";

export type ButtonProps =
    & {
        readonly description?: string;
        readonly onClick?: () => any;

        readonly flex?: number;

        readonly actionPrefix?: boolean;
        readonly actionSuffix?: boolean;

        readonly keepVisible?: boolean;
    }
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsChildrenAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
