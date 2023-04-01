/**
 * @author WMXPY
 * @namespace Components_Card
 * @description Declare
 */

import * as React from "react";
import { PropsChildrenAddOn, PropsClassNameAddOn, PropsLoadingAddOn, PropsMaximizeAddOn, PropsNoBorderAddOn, PropsNoPaddingAddOn, PropsNoSeparatorAddOn, PropsSizeAddon, PropsWidthHeightAddOn } from "../../util/props";

export type CardProps =
    & {
        readonly headerTitle?: React.ReactNode;
        readonly headerPrefix?: React.ReactNode;
        readonly headerSuffix?: React.ReactNode;

        readonly bodyTitle?: React.ReactNode;
        readonly bodyPrefix?: React.ReactNode;
        readonly bodySuffix?: React.ReactNode;

        readonly actions?: React.ReactNode;
    }
    & PropsLoadingAddOn
    & PropsNoBorderAddOn
    & PropsNoPaddingAddOn
    & PropsNoSeparatorAddOn
    & PropsMaximizeAddOn
    & PropsWidthHeightAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;
