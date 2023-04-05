/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Description
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { ButtonProps } from "../declare";

export const ButtonStyledDescription: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.secondary;
        }};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: ${(props: BarkThemeProps<ButtonProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "12px";
                case 'regular': return "14px";
                case 'large': return "16px";
            }
        }};
        line-height: ${(props: BarkThemeProps<ButtonProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "12px";
                case 'regular': return "14px";
                case 'large': return "16px";
            }
        }};
`;
