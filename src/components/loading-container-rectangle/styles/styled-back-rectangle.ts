/**
 * @author WMXPY
 * @namespace Components_LoadingContainerRectangle_Styles
 * @description Styled Back Rectangle
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

const backKeyframes = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const LoadingContainerRectangleStyledBackRectangle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        transition: 0.8s all ease-in-out;
        pointerEvents: none;
        position: absolute;
        width: 3rem;
        height: 3rem;
        opacity: 1;
        outline: 0.5rem solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.secondary;
        }};
        animation-name: ${backKeyframes};
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
`;
