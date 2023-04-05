/**
 * @author WMXPY
 * @namespace Components_SpinnerRectangle_Styles
 * @description Styled Front Rectangle
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { SpinnerRectangleProps } from "../declare";

const frontKeyframes = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const SpinnerRectangleStyledFrontRectangle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        z-index: 1;
        transition: 0.8s all ease-in-out;
        pointerEvents: none;
        position: absolute;
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<SpinnerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "48px";
                case 'large': return "96px";
            }
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<SpinnerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "48px";
                case 'large': return "96px";
            }
        }};
        opacity: 1;
        outline: ${(props: BarkThemeProps<SpinnerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "8px";
                case 'large': return "12px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        animation-name: ${frontKeyframes};
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
`;
