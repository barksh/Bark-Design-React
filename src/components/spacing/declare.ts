/**
 * @author WMXPY
 * @namespace Components_Spacing
 * @description Declare
 */

import { PropsClassNameAddOn, PropsSizeAddon } from "../../util/props";

export type SpacingPropsDirection = "horizontal" | "vertical";

export type SpacingProps =
    & {
        readonly direction?: SpacingPropsDirection;
    }
    & PropsClassNameAddOn
    & PropsSizeAddon;
