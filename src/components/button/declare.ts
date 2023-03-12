/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsSizeAddon } from "../../util/props";

export type ButtonProps =
    & {
        readonly description?: string;
        readonly onClick?: () => any;
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
