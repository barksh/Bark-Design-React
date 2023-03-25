/**
 * @author WMXPY
 * @namespace Components_SidePanel_Styles
 * @description Container
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { SidePanelProps } from "../declare";

const slideInRightKeyframes = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideInLeftKeyframes = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

export const SidePanelStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        position: fixed;
        top: 0;
        left: ${(props: BarkThemeProps<SidePanelProps>) => {
            if (props.align === 'left') {
                return 0;
            }
            return 'auto';
        }};
        right: ${(props: BarkThemeProps<SidePanelProps>) => {
            if (props.align === 'right') {
                return 0;
            }
            return 'auto';
        }};
        padding: ${(props: BarkThemeProps<SidePanelProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px 8px";
                case 'regular': return "2px 10px";
                case 'large': return "4px 16px";
            }
        }};
        animation-name: ${(props: BarkThemeProps<SidePanelProps>) => {
            if (props.align === 'left') {
                return slideInLeftKeyframes;
            }
            return slideInRightKeyframes;
        }};
        animation-duration: 0.2s;
        animation-timing-function: ease-in-out;
`;
