/**
 * @author WMXPY
 * @namespace Components_Code
 * @description Declare
 */

import { ReactNode } from "react";
import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoMarginAddOn, PropsNoPaddingAddOn, PropsSizeAddon, PropsWidthHeightAddOn } from "../../util/props";

export type CodeProps =
    & {
        readonly language: string;

        readonly copyButton?: ReactNode;

        readonly wrap?: boolean;
        readonly break?: boolean;
    }
    & PropsNoPaddingAddOn
    & PropsNoMarginAddOn
    & PropsMaximizeAddOn
    & PropsWidthHeightAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
