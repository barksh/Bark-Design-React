/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Suffix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const ButtonStyledSuffixContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.secondary;
        }};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
`;
