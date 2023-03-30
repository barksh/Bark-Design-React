/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Prefix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { ButtonProps } from "../declare";

export const ButtonStyledPrefixContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        font-size: ${(props: BarkThemeProps<ButtonProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "14px";
                case 'regular': return "14px";
                case 'large': return "20px";
            }
        }};
        padding-top: ${(props: BarkThemeProps<ButtonProps>) => {
            if (props.noPrefixPadding) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "4px";
                case 'large': return "4px";
            }
        }};
        padding-left: ${(props: BarkThemeProps<ButtonProps>) => {
            if (props.noPrefixPadding) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "5px";
                case 'large': return "6px";
            }
        }};
        color: ${(props: BarkThemeProps<ButtonProps>) => {
            if (props.actionPrefix) {
                return props.theme.textColor.action;
            } else {
                return props.theme.textColor.primary;
            }
        }};
        &:hover {
            color: ${(props: BarkThemeProps<ButtonProps>) => {
            return props.theme.textColor.primary;
        }};
        }
`;
