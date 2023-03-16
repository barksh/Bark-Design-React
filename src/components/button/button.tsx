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
import { ButtonStyledDescription } from "./styles/styled-description";
import { ButtonStyledPrefixContainer } from "./styles/styled-prefix-container";
import { ButtonStyledSuffixContainer } from "./styles/styled-suffix-container";
import { ButtonStyledTitle } from "./styles/styled-title";

const ButtonPrefix: React.FC<ButtonProps> = (props: ButtonProps) => {

    if (props.prefix) {
        return (<ButtonStyledPrefixContainer>
            {props.prefix}
        </ButtonStyledPrefixContainer>);
    }
    return null;
};

const ButtonSuffix: React.FC<ButtonProps> = (props: ButtonProps) => {

    if (props.suffix) {
        return (<ButtonStyledSuffixContainer>
            {props.suffix}
        </ButtonStyledSuffixContainer>);
    }
    return null;
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    const enrichedProps: ButtonProps = useButtonContext(props);

    return (<ButtonStyledButton
        className={enrichedProps.className}
        onClick={enrichedProps.onClick}
        size={enrichedProps.size}
        flex={enrichedProps.flex}
        maximize={enrichedProps.maximize}
        noBorder={enrichedProps.noBorder}
    >
        <ButtonPrefix
            {...props}
        />
        <ButtonStyledContainer
            size={enrichedProps.size}
        >
            <ButtonStyledTitle
                size={enrichedProps.size}
            >
                {enrichedProps.children}
            </ButtonStyledTitle>
            {enrichedProps.description ? <ButtonStyledDescription>
                {enrichedProps.description}
            </ButtonStyledDescription> : null}
        </ButtonStyledContainer>
        <ButtonSuffix
            {...props}
        />
    </ButtonStyledButton>);
};
