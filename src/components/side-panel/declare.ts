/**
 * @author WMXPY
 * @namespace Components_SidePanel
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon, PropsWidthHeightAddOn } from "../../util/props";

export type SidePanelPropsAlign = 'left' | 'right';

export type SidePanelProps =
    & {
        readonly identifier?: string;
        readonly alwaysRender?: boolean;
        readonly active?: boolean;

        readonly align?: SidePanelPropsAlign;
        readonly getAttachedElement?: () => HTMLElement;

        readonly zIndex?: number;
    }
    & PropsNoBorderAddOn
    & PropsWidthHeightAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
