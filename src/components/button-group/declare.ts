/**
 * @author WMXPY
 * @namespace Components_ButtonGroup
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsSizeAddon } from "../../util/props";

export type ButtonGroupProps =
    & {
        readonly flex?: boolean;
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
