/**
 * @author WMXPY
 * @namespace Components_LoadingContainer
 * @description Declare
 */

import * as React from "react";
import { PropsChildrenAddOn, PropsClassNameAddOn, PropsSizeAddon } from "../../util/props";

export type LoadingContainerProps =
    & {
        readonly loading?: boolean;
        readonly placeholder?: React.ReactNode;
    }
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
