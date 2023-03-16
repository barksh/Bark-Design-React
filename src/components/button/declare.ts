/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn } from "../../util/props";

export type ButtonProps =
    & {
        readonly description?: string;
        readonly onClick?: () => any;

        readonly flex?: number;
        readonly maximize?: boolean;
        readonly noBorder?: boolean;
    }
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsChildrenAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
