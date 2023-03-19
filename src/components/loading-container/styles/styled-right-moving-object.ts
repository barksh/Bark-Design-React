/**
 * @author WMXPY
 * @namespace Components_LoadingContainer_Styles
 * @description Styled Right Moving Object
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerProps } from "../declare";

const rightMovingObjectKeyframes = keyframes`
    0% {
        top: -8px;
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
        animation-name: ${rightMovingObjectKeyframes};
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
`;
