/**
 * @author WMXPY
 * @namespace Components_SidePanel_Styles
 * @description Container
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { fixWidthHeight } from "../../../util/width-height";
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
        height: 100%;
        max-width: 100%;
        width:${(props: BarkThemeProps<SidePanelProps>) => {
            if (typeof props.width !== 'undefined') {
                return fixWidthHeight(props.width);
            }
            if (props.maximize || props.maximizeWidth) {
                return "100%";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "256px";
                case 'regular': return "256px";
                case 'large': return "512px";
            }
        }};
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
        padding: 0px;
        overflow: auto;
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
        border-left: ${(props: BarkThemeProps<SidePanelProps>) => {
            if (props.align !== 'right' || props.noBorder) {
                return 'none';
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "3px";
                case 'large': return "4px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        border-right: ${(props: BarkThemeProps<SidePanelProps>) => {
            if (props.align !== 'left' || props.noBorder) {
                return 'none';
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "3px";
                case 'large': return "4px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
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
