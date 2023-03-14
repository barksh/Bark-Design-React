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
import { ButtonStyledTitle } from "./styles/styled-title";

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
    </ButtonStyledButton>);
};
