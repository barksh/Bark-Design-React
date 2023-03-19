/**
 * @author WMXPY
 * @namespace Components_LoadingContainer_Styles
 * @description Styled Right Moving Object
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerProps } from "../declare";

const smallRightMovingObjectKeyframes = keyframes`
    0% {
        top: -8px;
    }
    5% {
        top: -8px;
    }
    95% {
        top: 100%;
    }
    100% {
        top: 100%;
    }
`;

const regularRightMovingObjectKeyframes = keyframes`
    0% {
        top: -12px;
    }
    5% {
        top: -12px;
    }
    95% {
        top: 100%;
    }
    100% {
        top: 100%;
    }
`;

const largeRightMovingObjectKeyframes = keyframes`
    0% {
        top: -24px;
    }
    5% {
        top: -24px;
    }
    95% {
        top: 100%;
    }
    100% {
        top: 100%;
    }
`;

export const LoadingContainerRightMovingObject: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        position: absolute;
        top: ${(props: BarkThemeProps<LoadingContainerProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "-8px";
                case 'regular': return "-12px";
                case 'large': return "-24px";
            }
        }};
        right: 0;
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
                case 'small': return smallRightMovingObjectKeyframes;
                case 'regular': return regularRightMovingObjectKeyframes;
                case 'large': return largeRightMovingObjectKeyframes;
            }
        }};
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
`;
