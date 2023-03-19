/**
 * @author WMXPY
 * @namespace Components_Statistic
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type StatisticProps =
    & {
        readonly title?: string;
        readonly description?: string;
    }
    & PropsNoBorderAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
