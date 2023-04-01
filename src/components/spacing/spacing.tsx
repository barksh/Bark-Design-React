/**
 * @author WMXPY
 * @namespace Components_Spacing
 * @description Spacing
 */

import * as React from "react";
import { SpacingProps } from "./declare";
import { SpacingStyledSpacing } from "./styles/styled-container";

export const Spacing: React.FC<SpacingProps> = (props: SpacingProps) => {

    const fixedDirection = props.direction === 'vertical' ? 'vertical' : 'horizontal';

    return (<SpacingStyledSpacing
        className={props.className}
        size={props.size}
        direction={fixedDirection}
    />);
};
