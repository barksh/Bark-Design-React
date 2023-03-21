/**
 * @author WMXPY
 * @namespace Components_LoadingContainerProgressBar
 * @description Loading Container Progress Bar
 */

import * as React from "react";
import { LoadingContainerProgressBarProps } from "./declare";
import { LoadingContainerProgressBarStyledContainer } from "./styles/styled-container";

const LoadingContainerChildren: React.FC<LoadingContainerProgressBarProps> = (props: LoadingContainerProgressBarProps) => {

    if (props.loading) {
        return (<React.Fragment>
            {props.loadingPlaceholder}
        </React.Fragment>);
    }

    return (<React.Fragment>
        {props.children}
    </React.Fragment>);
};

export const LoadingContainerProgressBar: React.FC<LoadingContainerProgressBarProps> = (props: LoadingContainerProgressBarProps) => {

    return (<LoadingContainerProgressBarStyledContainer
        loading={props.loading}
        size={props.size}
    >
        <LoadingContainerChildren
            {...props}
        />
    </LoadingContainerProgressBarStyledContainer>);
};
