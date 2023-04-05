/**
 * @author WMXPY
 * @namespace Components_SpinnerRectangle
 * @description Spinner Rectangle
 */

import * as React from "react";
import { SpinnerRectangleProps } from "./declare";
import { SpinnerRectangleStyledBackRectangle } from "./styles/styled-back-rectangle";
import { SpinnerRectangleStyledCoreContainer } from "./styles/styled-core-container";
import { SpinnerRectangleStyledFrontRectangle } from "./styles/styled-front-rectangle";

export const SpinnerRectangle: React.FC<SpinnerRectangleProps> = (props: SpinnerRectangleProps) => {

    return (<SpinnerRectangleStyledCoreContainer
        className={props.className}
        size={props.size}
    >
        <SpinnerRectangleStyledFrontRectangle
            size={props.size}
        />
        <SpinnerRectangleStyledBackRectangle
            size={props.size}
        />
    </SpinnerRectangleStyledCoreContainer>);
};
