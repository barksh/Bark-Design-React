/**
 * @author WMXPY
 * @namespace Components_Statistic
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type StatisticPropsAlign = 'left' | 'center' | 'right';

export type StatisticProps =
    & {
        readonly title?: string;
        readonly description?: string;

        readonly align?: StatisticPropsAlign;
    }
    & PropsNoBorderAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
