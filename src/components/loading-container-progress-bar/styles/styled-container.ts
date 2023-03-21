/**
 * @author WMXPY
 * @namespace Components_LoadingContainerProgressBar_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const LoadingContainerProgressBarStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
`;
