/**
 * @author WMXPY
 * @namespace Components_LoadingContainerRectangle_Styles
 * @description Styled Back Rectangle
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerRectangleProps } from "../declare";

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
        width: ${(props: BarkThemeProps<LoadingContainerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "48px";
                case 'large': return "96px";
            }
        }};
        height: ${(props: BarkThemeProps<LoadingContainerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "48px";
                case 'large': return "96px";
            }
        }};
        opacity: 1;
        outline: ${(props: BarkThemeProps<LoadingContainerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "8px";
                case 'large': return "12px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.secondary;
        }};
        animation-name: ${backKeyframes};
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
`;
