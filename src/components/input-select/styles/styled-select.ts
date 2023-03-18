/**
 * @author WMXPY
 * @namespace Components_InputSelect_Styles
 * @description Styled Select
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { InputSelectProps } from "../declare";

export const InputSelectStyledSelect: StyledComponent<"select", BarkThemeProps, any> =
    styled.select`
        box-sizing: default;
        cursor: pointer;
        width: 100%;
        height: ${(props: BarkThemeProps<InputSelectProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "26px";
                case 'large': return "32px";
            }
        }};
        border: 1px solid transparent;
        background-color: transparent;
        border-radius: 0px;
        margin: 0px;
        padding: 0px;

        &:focus-within {
            border: 1px dashed ${(props: BarkThemeProps) => {
            return props.theme.borderColor.active;
        }};
        }
`;
