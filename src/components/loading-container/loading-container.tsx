/**
 * @author WMXPY
 * @namespace Components_LoadingContainer
 * @description Loading Container
 */

import * as React from "react";
import { LoadingContainerProps } from "./declare";
import { LoadingContainerStyledContainer } from "./styles/styled-container";

export const LoadingContainer: React.FC<LoadingContainerProps> = (props: LoadingContainerProps) => {

    return (<LoadingContainerStyledContainer>
        {props.children}
    </LoadingContainerStyledContainer>);
};
