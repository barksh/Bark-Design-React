/**
 * @author WMXPY
 * @namespace Components_LoadingContainerRectangle_Styles
 * @description Styled Front Rectangle
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

const frontKeyframes = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const LoadingContainerRectangleStyledFrontRectangle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        z-index: 1;
        transition: 0.8s all ease-in-out;
        pointerEvents: none;
        position: absolute;
        width: 3rem;
        height: 3rem;
        opacity: 1;
        outline: 0.5rem solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        animation-name: ${frontKeyframes};
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
`;
