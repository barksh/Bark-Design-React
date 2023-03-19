/**
 * @author WMXPY
 * @namespace Components_ContentBlock
 * @description Declare
 */

import * as React from "react";
import { PropsChildrenAddOn, PropsClassNameAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsSizeAddon } from "../../util/props";

export type ContentBlockProps =
    & {
        readonly width?: string | number;
        readonly height?: string | number;

        readonly loading?: boolean;
        readonly placeholder?: React.ReactNode;
    }
    & PropsNoBorderAddOn
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
