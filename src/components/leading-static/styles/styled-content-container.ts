/**
 * @author WMXPY
 * @namespace Components_LeadingStatic_Styles
 * @description Styled Content Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const LeadingStaticStyledContentContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
