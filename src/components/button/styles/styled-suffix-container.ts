/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Suffix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/props";
import { ButtonProps } from "../declare";

export const ButtonStyledSuffixContainer: StyledComponent<"div", BarkThemeProps, any> =
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
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "4px";
                case 'large': return "4px";
            }
        }};
        padding-right: ${(props: BarkThemeProps<ButtonProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "5px";
                case 'large': return "6px";
            }
        }};
        color: ${(props: BarkThemeProps<ButtonProps>) => {
            if (props.actionSuffix) {
                return props.theme.textColor.action;
            } else {
                return props.theme.textColor.primary;
            }
        }};
`;
