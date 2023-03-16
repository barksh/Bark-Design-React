/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { ButtonStyledButton } from "./styled-button";

export const ButtonStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        transition: all 0.2s ease-in-out;
        border: 1px dashed transparent;
        ${ButtonStyledButton as any}:focus & {
            border: 1px dashed ${(props: BarkThemeProps) => {
            return props.theme.borderColor.active;
        }};
        }
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
`;
