/**
 * @author WMXPY
 * @namespace Components_Separator
 * @description Declare
 */

import { PropsClassNameAddOn, PropsSizeAddon } from "../../util/props";

export type SeparatorPropsDirection = "horizontal" | "vertical";

export type SeparatorProps =
    & {
        readonly direction?: SeparatorPropsDirection;

        readonly withMargin?: boolean;
    }
    & PropsClassNameAddOn
    & PropsSizeAddon;
