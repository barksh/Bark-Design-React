/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Button
 */

import * as React from "react";
import { ButtonProps } from "./declare";
import { ButtonStyledButton } from "./styles/styled-button";
import { ButtonStyledDescription } from "./styles/styled-description";

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    console.log(props);

    return (<ButtonStyledButton
        onClick={props.onClick}
    >
        <div>{props.children}</div>
        {props.description ? <ButtonStyledDescription>
            {props.description}
        </ButtonStyledDescription> : null}
    </ButtonStyledButton>);
};
