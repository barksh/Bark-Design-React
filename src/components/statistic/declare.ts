/**
 * @author WMXPY
 * @namespace Components_Statistic
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon, PropsWidthHeightAddOn } from "../../util/props";

export type StatisticPropsAlign = 'left' | 'center' | 'right';

export type StatisticProps =
    & {
        readonly title?: string;
        readonly description?: string;

        readonly align?: StatisticPropsAlign;
    }
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsWidthHeightAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
