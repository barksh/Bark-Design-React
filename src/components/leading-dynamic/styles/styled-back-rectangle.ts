/**
 * @author WMXPY
 * @namespace Components_LeadingDynamic_Styles
 * @description Styled Back Rectangle
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { LeadingDynamicProps } from "../declare";

const backKeyframes = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const LeadingDynamicStyledBackRectangle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        transition: 0.3s border ease-in-out;
        pointerEvents: none;
        position: absolute;
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        opacity: 1;
        border: ${(props: BarkThemeProps<LeadingDynamicProps, {
        readonly isLoading: boolean;
    }>) => {
            const fixedSize = fixSizeProps(props.size);
            if (props.isLoading) {
                switch (fixedSize) {
                    case 'small': return "4px";
                    case 'regular': return "6px";
                    case 'large': return "8px";
                }
            } else {
                return "0px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.secondary;
        }};
        animation-name: ${(props: BarkThemeProps<LeadingDynamicProps, {
            readonly isLoading: boolean;
        }>) => {
            if (props.isLoading) {
                return backKeyframes;
            }
            return 'none';
        }};
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
`;
