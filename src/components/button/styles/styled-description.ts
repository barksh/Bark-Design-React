/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Description
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const ButtonStyledDescription: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.secondary;
        }};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
`;
