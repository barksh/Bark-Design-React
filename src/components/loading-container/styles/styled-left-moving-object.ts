/**
 * @author WMXPY
 * @namespace Components_LoadingContainer_Styles
 * @description Styled Left Moving Object
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerProps } from "../declare";

const smallLeftMovingObjectKeyframes = keyframes`
    0% {
        bottom: -8px;
    }
    5% {
        bottom: -8px;
    }
    95% {
        bottom: 100%;
    }
    100% {
        bottom: 100%;
    }
`;

const regularLeftMovingObjectKeyframes = keyframes`
    0% {
        bottom: -8px;
    }
    5% {
        bottom: -8px;
    }
    95% {
        bottom: 100%;
    }
    100% {
        bottom: 100%;
    }
`;

const largeLeftMovingObjectKeyframes = keyframes`
    0% {
        bottom: -8px;
    }
    5% {
        bottom: -8px;
    }
    95% {
        bottom: 100%;
    }
    100% {
        bottom: 100%;
    }
`;

export const LoadingContainerLeftMovingObject: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        position: absolute;
        bottom: ${(props: BarkThemeProps<LoadingContainerProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "-8px";
                case 'regular': return "-12px";
                case 'large': return "-24px";
            }
        }};
        left: 0;
        height: ${(props: BarkThemeProps<LoadingContainerProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "8px";
                case 'regular': return "12px";
                case 'large': return "24px";
            }
        }};
        width: ${(props: BarkThemeProps<LoadingContainerProps>) => {
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
                case 'small': return smallLeftMovingObjectKeyframes;
                case 'regular': return regularLeftMovingObjectKeyframes;
                case 'large': return largeLeftMovingObjectKeyframes;
            }
        }};
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
`;
