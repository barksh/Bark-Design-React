/**
 * @author WMXPY
 * @namespace Components_LeadingDynamic
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type LeadingDynamicProps =
    & {
        readonly loading?: boolean;
    }
    & PropsNoBorderAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
