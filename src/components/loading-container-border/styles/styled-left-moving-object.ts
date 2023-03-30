/**
 * @author WMXPY
 * @namespace Components_LoadingContainerBorder_Styles
 * @description Styled Left Moving Object
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerBorderProps } from "../declare";

const smallLeftMovingObjectKeyframes = keyframes`
    0% {
        ${parseLogicalCSSProperty("bottom")}: -8px;
    }
    5% {
        ${parseLogicalCSSProperty("bottom")}: -8px;
    }
    95% {
        ${parseLogicalCSSProperty("bottom")}: 100%;
    }
    100% {
        ${parseLogicalCSSProperty("bottom")}: 100%;
    }
`;

const regularLeftMovingObjectKeyframes = keyframes`
    0% {
        ${parseLogicalCSSProperty("bottom")}: -12px;
    }
    5% {
        ${parseLogicalCSSProperty("bottom")}: -12px;
    }
    95% {
        ${parseLogicalCSSProperty("bottom")}: 100%;
    }
    100% {
        ${parseLogicalCSSProperty("bottom")}: 100%;
    }
`;

const largeLeftMovingObjectKeyframes = keyframes`
    0% {
        ${parseLogicalCSSProperty("bottom")}: -24px;
    }
    5% {
        ${parseLogicalCSSProperty("bottom")}: -24px;
    }
    95% {
        ${parseLogicalCSSProperty("bottom")}: 100%;
    }
    100% {
        ${parseLogicalCSSProperty("bottom")}: 100%;
    }
`;

export const LoadingContainerBorderLeftMovingObject: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        transition: all 0.2s ease-in-out;
        position: absolute;
        ${parseLogicalCSSProperty("bottom")}: ${(props: BarkThemeProps<LoadingContainerBorderProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "-8px";
                case 'regular': return "-12px";
                case 'large': return "-24px";
            }
        }};
        ${parseLogicalCSSProperty("left")}: 0;
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<LoadingContainerBorderProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "8px";
                case 'regular': return "12px";
                case 'large': return "24px";
            }
        }};
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<LoadingContainerBorderProps>) => {
            if (!props.loading) {
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
                case 'small': return smallLeftMovingObjectKeyframes;
                case 'regular': return regularLeftMovingObjectKeyframes;
                case 'large': return largeLeftMovingObjectKeyframes;
            }
        }};
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
`;
