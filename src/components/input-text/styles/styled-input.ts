/**
 * @author WMXPY
 * @namespace Components_InputText_Styles
 * @description Styled Input
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/props";
import { InputTextProps } from "../declare";

export const InputTextStyledInput: StyledComponent<"input", BarkThemeProps, any> =
    styled.input`
        width: 100%;
        outline: none;
        border: none;
        padding:  ${(props: BarkThemeProps<InputTextProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "3px";
                case 'large': return "5px";
            }
        }};
        font-size: ${(props: BarkThemeProps<InputTextProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "20px";
                case 'large': return "24px";
            }
        }};
        border: 1px dashed transparent;
        &:focus-within {
            border: 1px dashed ${(props: BarkThemeProps) => {
            return props.theme.borderColor.active;
        }};
        }
`;
