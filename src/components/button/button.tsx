/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Button
 */

import React from "react";
import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../theme/declare";
import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

const StyledButton: StyledComponent<"button", any> = styled.button`
    background-color: ${(props: BarkThemeProps) => {
        return props.theme.global.backColor.primary;
    }};
`;

export type ButtonProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    return (<StyledButton>
        {props.children}
    </StyledButton>);
};
