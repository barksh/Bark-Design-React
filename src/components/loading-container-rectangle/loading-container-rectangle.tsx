/**
 * @author WMXPY
 * @namespace Components_LoadingContainerRectangle
 * @description Loading Container Rectangle
 */

import * as React from "react";
import { LoadingContainerRectangleProps } from "./declare";
import { LoadingContainerRectangleStyledContainer } from "./styles/styled-container";

const LoadingContainerChildren: React.FC<LoadingContainerRectangleProps> = (props: LoadingContainerRectangleProps) => {

    if (props.loading) {
        return (<React.Fragment>
            {props.loadingPlaceholder}
        </React.Fragment>);
    }

    return (<React.Fragment>
        {props.children}
    </React.Fragment>);
};

export const LoadingContainerRectangle: React.FC<LoadingContainerRectangleProps> = (props: LoadingContainerRectangleProps) => {

    return (<LoadingContainerRectangleStyledContainer
        loading={props.loading}
        size={props.size}
    >
        <LoadingContainerChildren
            {...props}
        />
    </LoadingContainerRectangleStyledContainer>);
};
