/**
 * @author WMXPY
 * @namespace Components_Timeline
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsPrefixAddOn, PropsSizeAddon } from "../../util/props";

export type TimelineProps =
    & {
    }
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;

export type TimelineItemProps =
    & {
    }
    & PropsSizeAddon
    & PropsPrefixAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn;
