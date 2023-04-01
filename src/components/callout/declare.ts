/**
 * @author WMXPY
 * @namespace Components_Callout
 * @description Declare
 */

import { ReactNode } from "react";
import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn, PropsWidthHeightAddOn } from "../../util/props";

export type CalloutProps =
    & {
        readonly title?: ReactNode;

        readonly actions?: ReactNode;
    }
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsWidthHeightAddOn
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
