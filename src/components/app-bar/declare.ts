/**
 * @author WMXPY
 * @namespace Components_AppBar
 * @description Declare
 */

import { PropsClassNameAddOn, PropsPrefixAddOn, PropsSizeAddon, PropsSuffixAddOn } from "../../util/props";

export type AppBarProps =
    & {
        readonly title: string;
    }
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
