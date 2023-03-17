/**
 * @author WMXPY
 * @namespace Components_ButtonGroup_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { ButtonStyledButton } from "../../button/styles/styled-button";
import { ButtonGroupProps } from "../declare";

export const ButtonGroupStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        width: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
        max-width: 100%;
        height: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
        border: ${(props: BarkThemeProps<ButtonGroupProps>) => {
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
        border-bottom: ${(props: BarkThemeProps<ButtonGroupProps>) => {
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
        ${ButtonStyledButton} + ${ButtonStyledButton} {
            border-left: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.noSeparator) {
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
        }
`;
