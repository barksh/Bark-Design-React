/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Button
 */

import * as React from "react";
import { ButtonContext } from "./context";
import { ButtonProps } from "./declare";
import { ButtonStyledButton } from "./styles/styled-button";
import { ButtonStyledDescription } from "./styles/styled-description";
import { ButtonStyledTitle } from "./styles/styled-title";

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    const context: Partial<ButtonProps> = React.useContext(ButtonContext);
    const enrichedProps: ButtonProps = {
        ...context,
        ...props,
    };

    return (<ButtonStyledButton
        className={enrichedProps.className}
        onClick={enrichedProps.onClick}
        size={enrichedProps.size}
        flex={enrichedProps.flex}
        noBorder={enrichedProps.noBorder}
    >
        <ButtonStyledTitle
            size={enrichedProps.size}
        >
            {enrichedProps.children}
        </ButtonStyledTitle>
        {enrichedProps.description ? <ButtonStyledDescription>
            {enrichedProps.description}
        </ButtonStyledDescription> : null}
    </ButtonStyledButton>);
};
