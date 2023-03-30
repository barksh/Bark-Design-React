/**
 * @author WMXPY
 * @namespace Components_EmptyPrompt
 * @description Empty Prompt
 */

import * as React from "react";
import { EmptyPromptProps } from "./declare";
import { EmptyPromptStyledContainer } from "./styles/styled-container";

export const EmptyPrompt: React.FC<EmptyPromptProps> = (props: EmptyPromptProps) => {

    return (<EmptyPromptStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </EmptyPromptStyledContainer>);
};
