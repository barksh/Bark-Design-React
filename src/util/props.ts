/**
 * @author WMXPY
 * @namespace Util
 * @description Props
 */

import { ReactNode } from "react";
import { SizePropertyValue } from "./size";

export type PropsChildrenAddOn = {
    readonly children?: ReactNode | undefined;
};

export type PropsClassNameAddOn = {
    readonly className?: string | undefined;
};

export type PropsNoBorderAddOn = {
    readonly noBorder?: boolean;
};

export type PropsLoadingAddOn = {
    readonly loading?: boolean;
    readonly loadingPlaceholder?: ReactNode;
};

export type PropsNoSeparatorAddOn = {
    readonly noSeparator?: boolean;
};

export type PropsMaximizeAddOn = {
    readonly maximize?: boolean;
};

export type PropsPrefixAddOn = {
    readonly prefix?: ReactNode;
};

export type PropsSuffixAddOn = {
    readonly suffix?: ReactNode;
};

export type PropsSizeAddon = {
    readonly size?: SizePropertyValue;
};

export type PropsPlaceholderAddOn = {
    readonly placeholder?: string;
};
