/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Styled Button
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/props";
import { ButtonProps } from "../declare";

export const ButtonStyledButton: StyledComponent<"button", BarkThemeProps, ButtonProps> =
    styled.button`
        flex: ${(props: BarkThemeProps<ButtonProps>) => {
            if (typeof props.flex === 'number') {
                return props.flex;
            }
            return "auto";
        }};
        text-align: start;
        transition: all 0.2s ease-in-out;
        box-sizing: border-box;
        cursor: pointer;
        width: ${(props: BarkThemeProps<ButtonProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "inherit";
        }};
        height: ${(props: BarkThemeProps<ButtonProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "auto";
        }};
        padding: 0px;
        border: ${(props: BarkThemeProps<ButtonProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            if (fixedSize === 'large') {
                return '2px';
            }
            return '1px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        border-bottom: ${(props: BarkThemeProps<ButtonProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            if (fixedSize === 'large') {
                return '5px';
            }
            return '2px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
        &:active {
            background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.active;
        }}; 
        }
`;
