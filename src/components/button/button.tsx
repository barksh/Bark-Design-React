/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Button
 */

import * as React from "react";
import { ButtonProps } from "./declare";
import { ButtonStyledButton } from "./styles/styled-button";
import { ButtonStyledDescription } from "./styles/styled-description";
import { ButtonStyledTitle } from "./styles/styled-title";

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    return (<ButtonStyledButton
        onClick={props.onClick}
        size={props.size}
        flex={props.flex}
    >
        <ButtonStyledTitle
            size={props.size}
        >
            {props.children}
        </ButtonStyledTitle>
        {props.description ? <ButtonStyledDescription>
            {props.description}
        </ButtonStyledDescription> : null}
    </ButtonStyledButton>);
};
