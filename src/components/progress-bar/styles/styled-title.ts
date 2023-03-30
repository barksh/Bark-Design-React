/**
 * @author WMXPY
 * @namespace Components_ProgressBar_Styles
 * @description Styled Title
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const ProgressBarStyledTitle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
