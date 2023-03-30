/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Button
 */

import * as React from "react";
import { useButtonContext } from "./context";
import { ButtonProps } from "./declare";
import { ButtonStyledButton } from "./styles/styled-button";
import { ButtonStyledContainer } from "./styles/styled-container";
import { ButtonStyledContentContainer } from "./styles/styled-content-container";
import { ButtonStyledDescription } from "./styles/styled-description";
import { ButtonStyledPrefixContainer } from "./styles/styled-prefix-container";
import { ButtonStyledSuffixContainer } from "./styles/styled-suffix-container";
import { ButtonStyledTitle } from "./styles/styled-title";

const ButtonPrefix: React.FC<ButtonProps> = (props: ButtonProps) => {

    if (props.prefix) {
        return (<ButtonStyledPrefixContainer
            size={props.size}
            noPrefixPadding={props.noPrefixPadding}
            actionPrefix={props.actionPrefix}
        >
            {props.prefix}
        </ButtonStyledPrefixContainer>);
    }
    return null;
};

const ButtonSuffix: React.FC<ButtonProps> = (props: ButtonProps) => {

    if (props.suffix) {
        return (<ButtonStyledSuffixContainer
            size={props.size}
            noSuffixPadding={props.noSuffixPadding}
            actionSuffix={props.actionSuffix}
        >
            {props.suffix}
        </ButtonStyledSuffixContainer>);
    }
    return null;
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    const enrichedProps: ButtonProps = useButtonContext(props);

    return (<ButtonStyledButton
        disabled={enrichedProps.disabled}
        className={enrichedProps.className}
        onClick={enrichedProps.onClick}
        size={enrichedProps.size}
        flex={enrichedProps.flex}
        maximize={enrichedProps.maximize}
        maximizeWidth={enrichedProps.maximizeWidth}
        maximizeHeight={enrichedProps.maximizeHeight}
        noBorder={enrichedProps.noBorder}
        noPadding={enrichedProps.noPadding}
        keepVisible={enrichedProps.keepVisible}
    >
        <ButtonStyledContainer
            noPadding={enrichedProps.noPadding}
        >
            <ButtonPrefix
                {...props}
            />
            <ButtonStyledContentContainer
                size={enrichedProps.size}
                noPadding={enrichedProps.noPadding}
            >
                <ButtonStyledTitle
                    size={enrichedProps.size}
                >
                    {enrichedProps.children}
                </ButtonStyledTitle>
                {enrichedProps.description
                    ? (<ButtonStyledDescription>
                        {enrichedProps.description}
                    </ButtonStyledDescription>)
                    : null}
            </ButtonStyledContentContainer>
            <ButtonSuffix
                {...props}
            />
        </ButtonStyledContainer>
    </ButtonStyledButton>);
};
