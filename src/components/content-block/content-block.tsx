/**
 * @author WMXPY
 * @namespace Components_ContentBlock
 * @description Content Block
 */

import * as React from "react";
import { LoadingContainerProps } from "../../util/props";
import { ContentBlockProps } from "./declare";
import { ContentBlockStyledContainer } from "./styles/styled-container";

const DefaultLoadingContainer: React.FC<LoadingContainerProps> = (props: LoadingContainerProps) => {

    if (typeof props.loading === 'boolean' && props.loading) {
        return (<React.Fragment>
            {props.loadingPlaceholder ?? null}
        </React.Fragment>);
    }
    return (<React.Fragment>
        {props.children ?? null}
    </React.Fragment>);
};

const getLoadingContainer = (props: ContentBlockProps): React.FC<LoadingContainerProps> => {

    if (props.loadingProvider) {
        return props.loadingProvider;
    }
    return DefaultLoadingContainer;
};

export const ContentBlock: React.FC<ContentBlockProps> = (props: ContentBlockProps) => {

    const LoadingContainer: React.FC<LoadingContainerProps> = getLoadingContainer(props);

    return (<ContentBlockStyledContainer
        size={props.size}
        logicWidth={props.width}
        minWidth={props.minWidth}
        maxWidth={props.maxWidth}
        logicHeight={props.height}
        minHeight={props.minHeight}
        maxHeight={props.maxHeight}
        maximize={props.maximize}
        maximizeWidth={props.maximizeWidth}
        maximizeHeight={props.maximizeHeight}
        balancedBorder={props.balancedBorder}
        noBorder={props.noBorder}
    >
        <LoadingContainer
            size={props.size}
            loading={props.loading}
            loadingPlaceholder={props.loadingPlaceholder}
            width={props.width}
            height={props.height}
        >
            {props.children}
        </LoadingContainer>
    </ContentBlockStyledContainer>);
};
