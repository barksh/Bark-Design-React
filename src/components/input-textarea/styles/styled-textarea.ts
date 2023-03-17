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
        outline: none;
        border: none;
        border-radius: 0px;
        padding:  ${(props: BarkThemeProps<InputTextareaProps>) => {
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
