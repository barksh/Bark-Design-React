/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Button
 */

import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../theme/declare";
import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

const StyledButton: StyledComponent<"button", any> = styled.button`
    border: 2px solid ${(props: BarkThemeProps) => {
        return props.theme.global.borderColor.primary;
    }};
    border-bottom: 5px solid ${(props: BarkThemeProps) => {
        return props.theme.global.borderColor.primary;
    }};
    background-color: ${(props: BarkThemeProps) => {
        return props.theme.global.backColor.primary;
    }};
`;

export type ButtonProps =
    & {
        readonly onClick?: () => any;
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    return (<StyledButton
        onClick={props.onClick}
    >
        {props.children}
    </StyledButton>);
};
