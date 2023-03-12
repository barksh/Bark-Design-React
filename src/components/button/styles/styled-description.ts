/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Styled Button
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const ButtonStyledDescription: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
       color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.secondary;
        }};
`;
