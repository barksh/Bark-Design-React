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
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: ${(props: BarkThemeProps<ButtonProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "5px";
                case 'large': return "8px";
            }
        }};
        border: ${(props: BarkThemeProps<ButtonProps>) => {
            const fixedSize = fixSizeProps(props.size);
            if (fixedSize === 'large') {
                return '2px';
            }
            return '1px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        border-bottom: ${(props: BarkThemeProps<ButtonProps>) => {
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
`;
