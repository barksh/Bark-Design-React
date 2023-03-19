/**
 * @author WMXPY
 * @namespace Components_LoadingContainer_Styles
 * @description Styled Top Moving Object
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerProps } from "../declare";

const smallTopMovingObjectKeyframes = keyframes`
    0% {
        left: -8px;
    }
    5% {
        left: -8px;
    }
    95% {
        left: 100%;
    }
    100% {
        left: 100%;
    }
`;

const regularTopMovingObjectKeyframes = keyframes`
    0% {
        left: -12px;
    }
    5% {
        left: -12px;
    }
    95% {
        left: 100%;
    }
    100% {
        left: 100%;
    }
`;

const largeTopMovingObjectKeyframes = keyframes`
    0% {
        left: -24px;
    }
    5% {
        left: -24px;
    }
    95% {
        left: 100%;
    }
    100% {
        left: 100%;
    }
`;

export const LoadingContainerTopMovingObject: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        position: absolute;
        top: 0;
        left: ${(props: BarkThemeProps<LoadingContainerProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "-8px";
                case 'regular': return "-12px";
                case 'large': return "-24px";
            }
        }};
        width: ${(props: BarkThemeProps<LoadingContainerProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "8px";
                case 'regular': return "12px";
                case 'large': return "24px";
            }
        }};
        height: ${(props: BarkThemeProps<LoadingContainerProps>) => {
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
        animation-name: ${(props: BarkThemeProps<LoadingContainerProps>) => {
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
