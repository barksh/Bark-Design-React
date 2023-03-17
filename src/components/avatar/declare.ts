/**
 * @author WMXPY
 * @namespace Components_Avatar
 * @description Declare
 */

import { PropsClassNameAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type AvatarProps =
    & {
        readonly imageUrl?: string;
        readonly name?: string;
    }
    & PropsNoBorderAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
