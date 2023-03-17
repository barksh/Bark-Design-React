/**
 * @author WMXPY
 * @namespace Components_ButtonGroup
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsNoSeparatorAddOn, PropsSizeAddon } from "../../util/props";

export type ButtonGroupProps =
    & {
        readonly keepVisible?: boolean;
    }
    & PropsNoBorderAddOn
    & PropsNoSeparatorAddOn
    & PropsMaximizeAddOn
    & PropsChildrenAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
