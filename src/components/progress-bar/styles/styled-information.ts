/**
 * @author WMXPY
 * @namespace Components_ProgressBar_Styles
 * @description Styled Information
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const ProgressBarStyledInformation: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
