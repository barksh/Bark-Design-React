/**
 * @author WMXPY
 * @namespace Components_Callout
 * @description Callout
 */

import * as React from "react";
import { ContentBlock } from "../export";
import { CalloutProps } from "./declare";
import { CalloutStyledContentContainer } from "./styles/styled-content-container";
import { CalloutStyledTitle } from "./styles/styled-title";
import { CalloutStyledActions } from "./styles/styled-actions";
import { CalloutStyledPrefix } from "./styles/styled-prefix";
import { CalloutStyledSuffix } from "./styles/styled-suffix";
import { CalloutStyledContainer } from "./styles/styled-container";

const CalloutPrefix: React.FC<CalloutProps> = (props: CalloutProps) => {

    if (props.prefix) {
        return (<CalloutStyledPrefix
            size={props.size}
            noPadding={props.noPadding}
        >
            {props.prefix}
        </CalloutStyledPrefix>);
    }
    return null;
};

const CalloutSuffix: React.FC<CalloutProps> = (props: CalloutProps) => {

    if (props.suffix) {
        return (<CalloutStyledSuffix
            size={props.size}
            noPadding={props.noPadding}
        >
            {props.suffix}
        </CalloutStyledSuffix>);
    }
    return null;
};

const CalloutTitle: React.FC<CalloutProps> = (props: CalloutProps) => {

    if (props.title) {
        return (<CalloutStyledTitle
            size={props.size}
            noPadding={props.noPadding}
            noBorder={!Boolean(props.children)}
        >
            {props.title}
        </CalloutStyledTitle>);
    }
    return null;
};

const CalloutActions: React.FC<CalloutProps> = (props: CalloutProps) => {

    if (props.actions) {
        return (<CalloutStyledActions
            size={props.size}
            noPadding={props.noPadding}
        >
            {props.actions}
        </CalloutStyledActions>);
    }
    return null;
};

export const Callout: React.FC<CalloutProps> = (props: CalloutProps) => {

    return (<ContentBlock
        size={props.size}
        width={props.width}
        minWidth={props.minWidth}
        maxWidth={props.maxWidth}
        height={props.height}
        minHeight={props.minHeight}
        maxHeight={props.maxHeight}
        maximize={props.maximize}
        maximizeWidth={props.maximizeWidth}
        maximizeHeight={props.maximizeHeight}
        balancedBorder={props.balancedBorder}
        noBorder={props.noBorder}
    >
        <CalloutStyledContainer
            size={props.size}
        >
            <CalloutPrefix
                {...props}
            />
            <CalloutStyledContentContainer>
                <CalloutTitle
                    {...props}
                />
                {props.children}
                <CalloutActions
                    {...props}
                />
            </CalloutStyledContentContainer>
            <CalloutSuffix
                {...props}
            />
        </CalloutStyledContainer>
    </ContentBlock>);
};
