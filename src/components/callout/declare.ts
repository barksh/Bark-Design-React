/**
 * @author WMXPY
 * @namespace Components_Callout
 * @description Declare
 */

import { ReactNode } from "react";
import { PropsBalancedBorderAddOn, PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsNoPaddingAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn, PropsWidthHeightAddOn } from "../../util/props";

export type CalloutProps =
    & {
        readonly title?: ReactNode;

        readonly actions?: ReactNode;
    }
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsWidthHeightAddOn
    & PropsNoPaddingAddOn
    & PropsNoBorderAddOn
    & PropsBalancedBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
