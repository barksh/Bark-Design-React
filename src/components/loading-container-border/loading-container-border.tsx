/**
 * @author WMXPY
 * @namespace Components_LoadingContainerBorder
 * @description Loading Container Border
 */

import * as React from "react";
import { LoadingContainerBorderProps } from "./declare";
import { LoadingContainerBorderBottomMovingObject } from "./styles/styled-bottom-moving-object";
import { LoadingContainerBorderStyledContainer } from "./styles/styled-container";
import { LoadingContainerBorderLeftMovingObject } from "./styles/styled-left-moving-object";
import { LoadingContainerBorderStyledPlaceholderContainer } from "./styles/styled-placeholder-container";
import { LoadingContainerBorderRightMovingObject } from "./styles/styled-right-moving-object";
import { LoadingContainerBorderTopMovingObject } from "./styles/styled-top-moving-object";

const LoadingContainerBorderChildren: React.FC<LoadingContainerBorderProps> = (props: LoadingContainerBorderProps) => {

    if (props.loading) {
        return (<React.Fragment>
            <LoadingContainerBorderTopMovingObject
                loading={props.loading}
                size={props.size}
            />
            <LoadingContainerBorderRightMovingObject
                loading={props.loading}
                size={props.size}
            />
            <LoadingContainerBorderBottomMovingObject
                loading={props.loading}
                size={props.size}
            />
            <LoadingContainerBorderLeftMovingObject
                loading={props.loading}
                size={props.size}
            />
            <LoadingContainerBorderStyledPlaceholderContainer>
                {props.loadingPlaceholder}
            </LoadingContainerBorderStyledPlaceholderContainer>
        </React.Fragment>);
    }

    return (<React.Fragment>
        {props.children}
    </React.Fragment>);
};

export const LoadingContainerBorder: React.FC<LoadingContainerBorderProps> = (props: LoadingContainerBorderProps) => {

    return (<LoadingContainerBorderStyledContainer
        loading={props.loading}
        size={props.size}
    >
        <LoadingContainerBorderChildren
            {...props}
        />
    </LoadingContainerBorderStyledContainer>);
};
