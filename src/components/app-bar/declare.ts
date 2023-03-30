/**
 * @author WMXPY
 * @namespace Components_AppBar
 * @description Declare
 */

import { ReactNode } from "react";
import { PropsClassNameAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn } from "../../util/props";

export type AppBarProps =
    & {
        readonly title: ReactNode;

        readonly sticky?: boolean;
    }
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
