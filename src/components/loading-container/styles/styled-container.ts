/**
 * @author WMXPY
 * @namespace Components_LoadingContainer_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const LoadingContainerStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: 100%;
        height: 100%;
`;
