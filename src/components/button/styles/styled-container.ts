/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/props";
import { ButtonProps } from "../declare";
import { ButtonStyledButton } from "./styled-button";

export const ButtonStyledContainer: StyledComponent<"div", BarkThemeProps, ButtonProps> =
    styled.div`
        transition: all 0.2s ease-in-out;
        border: 1px dashed transparent;
        ${ButtonStyledButton as any}:focus & {
            border: 1px dashed ${(props: BarkThemeProps) => {
            return props.theme.borderColor.active;
        }};
        }
        text-align: start;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: ${(props: BarkThemeProps<ButtonProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px 6px";
                case 'regular': return "4px 8px";
                case 'large': return "4px 12px";
            }
        }};
`;
