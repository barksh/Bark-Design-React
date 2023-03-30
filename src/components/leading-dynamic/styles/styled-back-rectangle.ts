/**
 * @author WMXPY
 * @namespace Components_LeadingDynamic_Styles
 * @description Styled Back Rectangle
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
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
        width: 100%;
        height: 100%;
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
                return "0px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.secondary;
        }};
        animation-name: ${(props: BarkThemeProps<LeadingDynamicProps>) => {
            if (props.loading) {
                return backKeyframes;
            }
            return 'none';
        }};
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
`;
