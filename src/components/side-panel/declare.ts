/**
 * @author WMXPY
 * @namespace Components_SidePanel
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type SidePanelPropsAlign = 'left' | 'right';

export type SidePanelProps =
    & {
        readonly align?: SidePanelPropsAlign;
    }
    & PropsNoBorderAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
