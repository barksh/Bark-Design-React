/**
 * @author WMXPY
 * @namespace Components_ButtonGroup
 * @description Button Group
 */

import * as React from "react";
import { ButtonGroupProps } from "./declare";
import { ButtonGroupStyledContainer } from "./styles/styled-container";

export const ButtonGroup: React.FC<ButtonGroupProps> = (props: ButtonGroupProps) => {

    return (<ButtonGroupStyledContainer>
        {props.children}
    </ButtonGroupStyledContainer>);
};
