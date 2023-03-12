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

    const [hovering, setHovering] = React.useState(false);

    return (<ButtonStyledButton
        onClick={props.onClick}
        onMouseEnter={() => {
            setHovering(true);
        }}
        onMouseLeave={() => {
            setHovering(false);
        }}
        size={props.size}
        flex={props.flex}
    >
        <ButtonStyledTitle
            size={props.size}
            hover={hovering}
        >
            {props.children}
        </ButtonStyledTitle>
        {props.description ? <ButtonStyledDescription>
            {props.description}
        </ButtonStyledDescription> : null}
    </ButtonStyledButton>);
};
