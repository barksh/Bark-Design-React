/**
 * @author WMXPY
 * @namespace Components_InputTextarea_Styles
 * @description Styled Textarea
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { InputTextareaProps } from "../declare";

export const InputTextareaStyledTextarea: StyledComponent<"textarea", BarkThemeProps, any> =
    styled.textarea`
        width: 100%;
        height: ${(props: BarkThemeProps<InputTextareaProps>) => {
            if (typeof props.rows === 'number') {
                return `${props.rows}em`;
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4em";
                case 'regular': return "6em";
                case 'large': return "8em";
            }
        }};
        outline: none;
        border: none;
        border-radius: 0px;
        cursor: ${(props: BarkThemeProps<InputTextareaProps>) => {
            if (props.disabled) {
                return "not-allowed";
            }
            return "text";
        }};
        resize: ${(props: BarkThemeProps<InputTextareaProps>) => {
            if (props.resizable) {
                return 'vertical';
            }
            return 'none';
        }};
        margin: 0px;
        padding: ${(props: BarkThemeProps<InputTextareaProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "3px";
                case 'large': return "5px";
            }
        }};
        font-size: ${(props: BarkThemeProps<InputTextareaProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "14px";
                case 'regular': return "16px";
                case 'large': return "20px";
            }
        }};
        border: 1px dashed transparent;
        &:focus-within {
            border: 1px dashed ${(props: BarkThemeProps) => {
            return props.theme.borderColor.active;
        }};
        }
`;
