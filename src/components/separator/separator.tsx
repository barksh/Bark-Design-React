/**
 * @author WMXPY
 * @namespace Components_Separator
 * @description Separator
 */

import * as React from "react";
import { SeparatorProps } from "./declare";
import { SeparatorStyledSeparator } from "./styles/styled-container";

export const Separator: React.FC<SeparatorProps> = (props: SeparatorProps) => {

    const fixedDirection = props.direction === 'vertical' ? 'vertical' : 'horizontal';

    return (<SeparatorStyledSeparator
        className={props.className}
        size={props.size}
        direction={fixedDirection}
        withBorder={props.withBorder}
        noSpacing={props.noSpacing}
    />);
};
