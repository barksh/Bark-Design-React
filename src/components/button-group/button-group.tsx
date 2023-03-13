/**
 * @author WMXPY
 * @namespace Components_ButtonGroup
 * @description Button Group
 */

import * as React from "react";
import { ButtonContext } from "../button/context";
import { ButtonGroupProps } from "./declare";
import { ButtonGroupStyledContainer } from "./styles/styled-container";

export const ButtonGroup: React.FC<ButtonGroupProps> = (props: ButtonGroupProps) => {

    return (<ButtonGroupStyledContainer
        flex={props.flex}
    >
        <ButtonContext.Provider
            value={{
                size: props.size,
            }}
        >
            {props.children}
        </ButtonContext.Provider>
    </ButtonGroupStyledContainer>);
};
