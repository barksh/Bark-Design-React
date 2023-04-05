/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Title
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { ButtonProps } from "../declare";
import { ButtonStyledButton } from "./styled-button";

export const ButtonStyledTitle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${(props: BarkThemeProps<ButtonProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "15px";
                case 'regular': return "16px";
                case 'large': return "24px";
            }
        }};
        line-height: ${(props: BarkThemeProps<ButtonProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "17px";
                case 'large': return "25px";
            }
        }};
        color: ${(props: BarkThemeProps<ButtonProps>) => {
            return props.theme.textColor.action;
        }};
        ${ButtonStyledButton as any}:hover & {
            text-decoration: underline;
        }
        &:hover {
            color: ${(props: BarkThemeProps<ButtonProps>) => {
            return props.theme.textColor.primary;
        }};
        }
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
`;
