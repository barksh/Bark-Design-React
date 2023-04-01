/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type TableProps =
    & {
        readonly fixedLayout?: boolean;

        readonly noOuterBorder?: boolean;
        readonly noInnerBorder?: boolean;
    }
    & PropsNoBorderAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
