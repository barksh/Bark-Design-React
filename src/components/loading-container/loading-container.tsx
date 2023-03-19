/**
 * @author WMXPY
 * @namespace Components_LoadingContainer
 * @description Loading Container
 */

import * as React from "react";
import { LoadingContainerProps } from "./declare";
import { LoadingContainerBottomMovingObject } from "./styles/styled-bottom-moving-object";
import { LoadingContainerStyledContainer } from "./styles/styled-container";
import { LoadingContainerLeftMovingObject } from "./styles/styled-left-moving-object";
import { LoadingContainerRightMovingObject } from "./styles/styled-right-moving-object";
import { LoadingContainerTopMovingObject } from "./styles/styled-top-moving-object";

const LoadingContainerChildren: React.FC<LoadingContainerProps> = (props: LoadingContainerProps) => {

    if (props.loading) {
        return (<React.Fragment>
            {props.placeholder}
        </React.Fragment>);
    }

    return (<React.Fragment>
        {props.children}
    </React.Fragment>);
};

export const LoadingContainer: React.FC<LoadingContainerProps> = (props: LoadingContainerProps) => {

    return (<LoadingContainerStyledContainer
        loading={props.loading}
        size={props.size}
    >
        <LoadingContainerTopMovingObject
            size={props.size}
        />
        <LoadingContainerRightMovingObject
            size={props.size}
        />
        <LoadingContainerBottomMovingObject
            size={props.size}
        />
        <LoadingContainerLeftMovingObject
            size={props.size}
        />
        <LoadingContainerChildren
            {...props}
        />
    </LoadingContainerStyledContainer>);
};
