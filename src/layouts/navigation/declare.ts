/**
 * @author WMXPY
 * @namespace Layouts_Navigation
 * @description Declare
 */

import * as React from "react";
import { PropsChildrenAddOn, PropsSizeAddon } from "../../util/props";

export type NavigationLayoutPropsAlign = 'left' | 'right';

export type NavigationLayoutProps =
    & {
        readonly navigation?: React.ReactNode;

        readonly align?: NavigationLayoutPropsAlign;
    }
    & PropsSizeAddon
    & PropsChildrenAddOn;
