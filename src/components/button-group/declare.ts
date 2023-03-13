/**
 * @author WMXPY
 * @namespace Components_ButtonGroup
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsSizeAddon } from "../../util/props";

export type ButtonGroupProps =
    & {
        readonly maximize?: boolean;
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
