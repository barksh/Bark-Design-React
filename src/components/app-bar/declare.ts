/**
 * @author WMXPY
 * @namespace Components_AppBar
 * @description Declare
 */

import { PropsClassNameAddOn, PropsSizeAddon } from "../../util/props";

export type AppBarProps =
    & {
        readonly title: string;
    }
    & PropsClassNameAddOn
    & PropsSizeAddon;
