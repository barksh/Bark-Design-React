/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Button
 */

import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../theme/declare";
import { fixSizeProps, PropsChildrenAddOn, PropsClassNameAddOn, PropsSizeAddon } from "../../util/props";

const StyledButton: StyledComponent<"button", any> = styled.button`
    border: ${(props: BarkThemeProps<ButtonProps>) => {
        const fixedSize = fixSizeProps(props.size);
        if (fixedSize === 'large') {
            return '2px';
        }
        return '1px';
    }} solid ${(props: BarkThemeProps) => {
        return props.theme.global.borderColor.primary;
    }};
    border-bottom: ${(props: BarkThemeProps<ButtonProps>) => {
        const fixedSize = fixSizeProps(props.size);
        if (fixedSize === 'large') {
            return '5px';
        }
        return '2px';
    }} solid ${(props: BarkThemeProps) => {
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
    & PropsClassNameAddOn
    & PropsSizeAddon;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    return (<StyledButton
        onClick={props.onClick}
    >
        {props.children}
    </StyledButton>);
};
