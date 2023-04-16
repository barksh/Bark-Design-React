/**
 * @author WMXPY
 * @namespace Util
 * @description Props
 */

import { ReactNode } from "react";
import { SizePropertyValue } from "./size";

export type LoadingContainerProps =
    & {
        readonly loading?: boolean;
        readonly loadingPlaceholder?: ReactNode;
    }
    & PropsWidthHeightAddOn
    & PropsClassNameAddOn
    & PropsChildrenAddOn
    & PropsSizeAddon;

export type PropsChildrenAddOn = {
    readonly children?: ReactNode | undefined;
};

export type PropsClassNameAddOn = {
    readonly className?: string | undefined;
};

export type PropsBalancedBorderAddOn = {
    readonly balancedBorder?: boolean;
};

export type PropsNoBorderAddOn = {
    readonly noBorder?: boolean;
};

export type PropsNoPaddingAddOn = {
    readonly noPadding?: boolean;
};

export type PropsNoMarginAddOn = {
    readonly noMargin?: boolean;
};

export type PropsWidthHeightAddOn = {
    readonly width?: string | number;
    readonly minWidth?: string | number;
    readonly maxWidth?: string | number;

    readonly height?: string | number;
    readonly minHeight?: string | number;
    readonly maxHeight?: string | number;
};

export type PropsLoadingAddOn = {
    readonly loadingProvider?: React.FC<LoadingContainerProps>;

    readonly loading?: boolean;
    readonly loadingSize?: SizePropertyValue;
    readonly loadingPlaceholder?: ReactNode;
} & PropsWidthHeightAddOn;

export type PropsNoSeparatorAddOn = {
    readonly noSeparator?: boolean;
};

export type PropsMaximizeAddOn = {
    readonly maximize?: boolean;

    readonly maximizeWidth?: boolean;
    readonly maximizeHeight?: boolean;
};

export type PropsPrefixAddOn = {
    readonly prefix?: ReactNode;
};

export type PropsSuffixAddOn = {
    readonly suffix?: ReactNode;
};

export type PropsDisabledAddOn = {
    readonly disabled?: boolean;
};

export type PropsSizeAddon = {
    readonly size?: SizePropertyValue;
};

export type PropsPlaceholderAddOn = {
    readonly placeholder?: string;
};

export type PropsHoverActionsAddOn = {
    readonly hoverActions?: ReactNode;
};
