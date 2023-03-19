/**
 * @author WMXPY
 * @namespace Components_LoadingContainer
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsLoadingAddOn, PropsSizeAddon } from "../../util/props";

export type LoadingContainerProps =
    & {
    }
    & PropsLoadingAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
