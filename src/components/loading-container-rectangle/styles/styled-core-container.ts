/**
 * @author WMXPY
 * @namespace Components_LoadingContainerRectangle_Styles
 * @description Styled Core Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const LoadingContainerRectangleStyledCoreContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        transition: 0.5s all ease-in-out;
        position: absolute;
`;
