/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Prefix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const ButtonStyledPrefixContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.secondary;
        }};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
`;
