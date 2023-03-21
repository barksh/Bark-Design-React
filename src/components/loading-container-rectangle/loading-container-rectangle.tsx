/**
 * @author WMXPY
 * @namespace Components_LoadingContainerRectangle
 * @description Loading Container Rectangle
 */

import * as React from "react";
import { LoadingContainerRectangleProps } from "./declare";
import { LoadingContainerRectangleStyledBackRectangle } from "./styles/styled-back-rectangle";
import { LoadingContainerRectangleStyledContainer } from "./styles/styled-container";
import { LoadingContainerRectangleStyledCoreContainer } from "./styles/styled-core-container";
import { LoadingContainerRectangleStyledFrontRectangle } from "./styles/styled-front-rectangle";

const LoadingContainerChildren: React.FC<LoadingContainerRectangleProps> = (props: LoadingContainerRectangleProps) => {

    if (props.loading) {
        return (<React.Fragment>
            <LoadingContainerRectangleStyledCoreContainer>
                <LoadingContainerRectangleStyledFrontRectangle
                />
                <LoadingContainerRectangleStyledBackRectangle
                />
            </LoadingContainerRectangleStyledCoreContainer>
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
