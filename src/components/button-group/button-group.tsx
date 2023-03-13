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
        size={props.size}
        maximize={props.maximize}
    >
        <ButtonContext.Provider
            value={{
                noBorder: true,
                size: props.size,
                flex: 1,
            }}
        >
            {props.children}
        </ButtonContext.Provider>
    </ButtonGroupStyledContainer>);
};
