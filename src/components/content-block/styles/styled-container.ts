/**
 * @author WMXPY
 * @namespace Components_ContentBlock_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { fixWidthHeight } from "../../../util/width-height";
import { ContentBlockProps } from "../declare";

export const ContentBlockStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: ${(props: BarkThemeProps<ContentBlockProps>) => {
            if (typeof props.minWidth !== 'undefined'
                || props.minHeight !== 'undefined') {
                return "grid";
            }
            return "block";
        }};
        white-space: pre-wrap;
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<ContentBlockProps, {
            readonly logicWidth?: string | number;
        }>) => {
            if (typeof props.logicWidth !== 'undefined') {
                return fixWidthHeight(props.logicWidth);
            }
            if (props.maximize || props.maximizeWidth) {
                return "100%";
            }
            return "auto";
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<ContentBlockProps, {
            readonly logicHeight?: string | number;
        }>) => {
            if (typeof props.logicHeight !== 'undefined') {
                return fixWidthHeight(props.logicHeight);
            }
            if (props.maximize || props.maximizeHeight) {
                return "100%";
            }
            return "auto";
        }};
        ${parseLogicalCSSProperty("min-width")}: ${(props: BarkThemeProps<ContentBlockProps>) => {
            if (typeof props.minWidth !== 'undefined') {
                return fixWidthHeight(props.minWidth);
            }
            return "none";
        }};
        ${parseLogicalCSSProperty("min-height")}: ${(props: BarkThemeProps<ContentBlockProps>) => {
            if (typeof props.minHeight !== 'undefined') {
                return fixWidthHeight(props.minHeight);
            }
            return "none";
        }};
        ${parseLogicalCSSProperty("max-width")}: ${(props: BarkThemeProps<ContentBlockProps>) => {
            if (typeof props.maxWidth !== 'undefined') {
                return fixWidthHeight(props.maxWidth);
            }
            return "none";
        }};
        ${parseLogicalCSSProperty("max-height")}: ${(props: BarkThemeProps<ContentBlockProps>) => {
            if (typeof props.maxHeight !== 'undefined') {
                return fixWidthHeight(props.maxHeight);
            }
            return "none";
        }};
        border: ${(props: BarkThemeProps<ContentBlockProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "1px";
                case 'large': return "2px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        ${parseLogicalCSSProperty("border-right")}: ${(props: BarkThemeProps<ContentBlockProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            if (props.balancedBorder) {
                switch (fixedSize) {
                    case 'small': return "1px";
                    case 'regular': return "1px";
                    case 'large': return "2px";
                }
            }
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
`;
