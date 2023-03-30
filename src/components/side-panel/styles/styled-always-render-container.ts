/**
 * @author WMXPY
 * @namespace Components_SidePanel_Styles
 * @description Always Render Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { fixWidthHeight } from "../../../util/width-height";
import { SidePanelProps } from "../declare";

export const SidePanelStyledAlwaysRenderContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("height")}: 100%;
        max-width: 100%;
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<SidePanelProps>) => {
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
        ${parseLogicalCSSProperty("top")}: 0;
        ${parseLogicalCSSProperty("left")}: ${(props: BarkThemeProps<SidePanelProps>) => {
            if (props.align === 'left') {
                return 0;
            }
            return 'auto';
        }};
        ${parseLogicalCSSProperty("right")}: ${(props: BarkThemeProps<SidePanelProps>) => {
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
        ${parseLogicalCSSProperty("border-left")}: ${(props: BarkThemeProps<SidePanelProps>) => {
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
        ${parseLogicalCSSProperty("border-right")}: ${(props: BarkThemeProps<SidePanelProps>) => {
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
        transition: transform 0.2s ease-in-out;
        transform: ${(props: BarkThemeProps<SidePanelProps>) => {
            if (props.active) {
                return 'translateX(0)';
            }
            if (props.align === 'left') {
                return 'translateX(-100%)';
            }
            return 'translateX(100%)';
        }};
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
`;
