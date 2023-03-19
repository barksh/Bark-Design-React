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
                case 'small': return "26px";
                case 'regular': return "32px";
                case 'large': return "42px";
            }
        }};
        cursor: ${(props: BarkThemeProps<InputSelectProps>) => {
            if (props.disabled) {
                return "not-allowed";
            }
            return "pointer";
        }};
        border: 1px solid transparent;
        background-color: transparent;
        border-radius: 0px;
        margin: 0px;
        font-size: ${(props: BarkThemeProps<InputSelectProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "20px";
                case 'large': return "24px";
            }
        }};
        padding-left: ${(props: BarkThemeProps<InputSelectProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "4px";
                case 'large': return "6px";
            }
        }};

        &:focus-within {
            border: 1px dashed ${(props: BarkThemeProps) => {
            return props.theme.borderColor.active;
        }};
        }
`;
