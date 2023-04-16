/**
 * @author WMXPY
 * @namespace Components_Tabs
 * @description Declare
 */

import { PropsBalancedBorderAddOn, PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon, PropsWidthHeightAddOn } from "../../util/props";
import { TabsController } from "./controller";

export type TabsProps =
    & {
        readonly controller: TabsController;

        readonly activeTabId?: string;
        readonly onTabIdChange?: (tabId: string) => void;

        readonly noHeaderEndingBorder?: boolean;
        readonly noHeaderBottomMargin?: boolean;
    }
    & PropsMaximizeAddOn
    & PropsWidthHeightAddOn
    & PropsNoBorderAddOn
    & PropsBalancedBorderAddOn
    & PropsChildrenAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;

export type TabProps =
    & {
        readonly tabId?: string;
        readonly title: string;
    }
    & PropsMaximizeAddOn
    & PropsWidthHeightAddOn
    & PropsNoBorderAddOn
    & PropsChildrenAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
