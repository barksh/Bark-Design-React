/**
 * @author WMXPY
 * @namespace Components_LoadingContainerBorder_Styles
 * @description Styled Top Moving Object
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerBorderProps } from "../declare";

const smallTopMovingObjectKeyframes = keyframes`
    0% {
        ${parseLogicalCSSProperty("left")}: -8px;
    }
    5% {
        ${parseLogicalCSSProperty("left")}: -8px;
    }
    95% {
        ${parseLogicalCSSProperty("left")}: 100%;
    }
    100% {
        ${parseLogicalCSSProperty("left")}: 100%;
    }
`;

const regularTopMovingObjectKeyframes = keyframes`
    0% {
        ${parseLogicalCSSProperty("left")}: -12px;
    }
    5% {
        ${parseLogicalCSSProperty("left")}: -12px;
    }
    95% {
        ${parseLogicalCSSProperty("left")}: 100%;
    }
    100% {
        ${parseLogicalCSSProperty("left")}: 100%;
    }
`;

const largeTopMovingObjectKeyframes = keyframes`
    0% {
        ${parseLogicalCSSProperty("left")}: -24px;
    }
    5% {
        ${parseLogicalCSSProperty("left")}: -24px;
    }
    95% {
        ${parseLogicalCSSProperty("left")}: 100%;
    }
    100% {
        ${parseLogicalCSSProperty("left")}: 100%;
    }
`;

export const LoadingContainerBorderTopMovingObject: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        transition: all 0.2s ease-in-out;
        position: absolute;
        ${parseLogicalCSSProperty("top")}: 0;
        ${parseLogicalCSSProperty("left")}: ${(props: BarkThemeProps<LoadingContainerBorderProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "-8px";
                case 'regular': return "-12px";
                case 'large': return "-24px";
            }
        }};
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<LoadingContainerBorderProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "8px";
                case 'regular': return "12px";
                case 'large': return "24px";
            }
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<LoadingContainerBorderProps, {
            readonly isLoading: boolean;
        }>) => {
            if (!props.isLoading) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }};
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        animation-name: ${(props: BarkThemeProps<LoadingContainerBorderProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return smallTopMovingObjectKeyframes;
                case 'regular': return regularTopMovingObjectKeyframes;
                case 'large': return largeTopMovingObjectKeyframes;
            }
        }};
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
`;
