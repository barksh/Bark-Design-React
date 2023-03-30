/**
 * @author WMXPY
 * @namespace Components_LeadingDynamic_Styles
 * @description Styled Front Rectangle
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { LeadingDynamicProps } from "../declare";

const frontKeyframes = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const LeadingDynamicStyledFrontRectangle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        z-index: 1;
        transition: 0.3s border ease-in-out;
        pointerEvents: none;
        position: absolute;
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        opacity: 1;
        border: ${(props: BarkThemeProps<LeadingDynamicProps>) => {
            const fixedSize = fixSizeProps(props.size);
            if (props.loading) {
                switch (fixedSize) {
                    case 'small': return "4px";
                    case 'regular': return "6px";
                    case 'large': return "8px";
                }
            } else {
                if (props.noBorder) {
                    return "0px";
                }
                switch (fixedSize) {
                    case 'small': return "1px";
                    case 'regular': return "1px";
                    case 'large': return "2px";
                }
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        ${parseLogicalCSSProperty("border-left")}: ${(props: BarkThemeProps<LeadingDynamicProps>) => {
            if (!props.loading && props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        animation-name: ${(props: BarkThemeProps<LeadingDynamicProps>) => {
            if (props.loading) {
                return frontKeyframes;
            }
            return 'none';
        }};
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
`;
