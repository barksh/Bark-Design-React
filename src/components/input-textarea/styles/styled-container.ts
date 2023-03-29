/**
 * @author WMXPY
 * @namespace Components_InputTextarea_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { InputTextareaProps } from "../declare";

export const InputTextareaStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        height: fit-content;
        width: 100%;
        border: ${(props: BarkThemeProps<InputTextareaProps>) => {
            const fixedSize = fixSizeProps(props.size);
            if (fixedSize === 'large') {
                return '2px';
            }
            return '1px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        border-left: ${(props: BarkThemeProps<InputTextareaProps>) => {
            const fixedSize = fixSizeProps(props.size);
            if (fixedSize === 'large') {
                return '5px';
            }
            return '2px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        margin: 0px;
        padding: 0px;
`;
