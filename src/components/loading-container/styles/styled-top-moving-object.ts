/**
 * @author WMXPY
 * @namespace Components_LoadingContainer_Styles
 * @description Styled Top Moving Object
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerProps } from "../declare";

const topMovingObjectKeyframes = keyframes`
    0% {
        left: -8px;
    }
    100% {
        left: 100%;
    }
`;

export const LoadingContainerTopMovingObject: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        position: absolute;
        top: 0;
        left: 0;
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
        animation-name: ${topMovingObjectKeyframes};
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
`;
