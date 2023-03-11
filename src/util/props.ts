/**
 * @author WMXPY
 * @namespace Util
 * @description Button
 */

import { ReactNode } from "react";

export type PropsChildrenAddOn = {
    readonly children?: ReactNode | undefined;
};

export type PropsClassNameAddOn = {
    readonly className?: string | undefined;
};

type SizePropertyValue = 'small' | 'regular' | 'large';
export type PropsSizeAddon = {
    readonly size?: SizePropertyValue;
};

export const fixSizeProps = (size?: SizePropertyValue): SizePropertyValue => {

    if (typeof size !== 'string') {
        return 'regular';
    }
    return size;
};
