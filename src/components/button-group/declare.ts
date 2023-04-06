/**
 * @author WMXPY
 * @namespace Components_ButtonGroup
 * @description Declare
 */

import { PropsBalancedBorderAddOn, PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsNoSeparatorAddOn, PropsSizeAddon } from "../../util/props";

export type ButtonGroupProps =
    & {
        readonly fitContent?: boolean;

        readonly keepVisible?: boolean;

        readonly noBorderTop?: boolean;
        readonly noBorderBottom?: boolean;
        readonly noBorderLeft?: boolean;
        readonly noBorderRight?: boolean;
    }
    & PropsNoBorderAddOn
    & PropsBalancedBorderAddOn
    & PropsNoSeparatorAddOn
    & PropsMaximizeAddOn
    & PropsChildrenAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
