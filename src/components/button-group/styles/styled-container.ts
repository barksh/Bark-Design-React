/**
 * @author WMXPY
 * @namespace Components_ButtonGroup_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { ButtonStyledButton } from "../../button/styles/styled-button";
import { ButtonGroupProps } from "../declare";

export const ButtonGroupStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.maximize || props.maximizeWidth) {
                return "100%";
            }
            return "fit-content";
        }};
        ${parseLogicalCSSProperty("max-width")}: 100%;
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.maximize || props.maximizeHeight) {
                return "100%";
            }
            return "fit-content";
        }};
        ${parseLogicalCSSProperty("border-left")}: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.noBorder || props.noBorderLeft) {
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
        ${parseLogicalCSSProperty("border-right")}: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.noBorder || props.noBorderRight) {
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
        ${parseLogicalCSSProperty("border-top")}: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.noBorder || props.noBorderTop) {
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
        ${parseLogicalCSSProperty("border-bottom")}: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.noBorder || props.noBorderBottom) {
                return "0px";
            }

            const fixedSize = fixSizeProps(props.size);
            if (props.balancedBorder) {
                if (fixedSize === 'large') {
                    return '2px';
                }
                return '1px';
            }

            if (fixedSize === 'large') {
                return '5px';
            }
            return '2px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        ${ButtonStyledButton} + ${ButtonStyledButton} {
            ${parseLogicalCSSProperty("border-left")}: ${(props: BarkThemeProps<ButtonGroupProps>) => {
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
