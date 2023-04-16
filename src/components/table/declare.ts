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

export type TableHeadProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export type TableBodyProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export type TableColumnProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export type TableHeaderProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export type TableRowProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;
