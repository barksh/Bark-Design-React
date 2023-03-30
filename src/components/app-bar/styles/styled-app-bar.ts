/**
 * @author WMXPY
 * @namespace Components_AppBar_Styles
 * @description Styled App Bar
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { AppBarProps } from "../declare";

export const AppBarStyledAppBar: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        ${parseLogicalCSSProperty("width")}: 100%;
        position: ${(props: BarkThemeProps<AppBarProps>) => {
            if (props.sticky) {
                return "sticky";
            }
            return "relative";
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "48px";
                case 'large': return "64px";
            }
        }};
        ${parseLogicalCSSProperty("border-top")}: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }} solid ${(props: BarkThemeProps<AppBarProps>) => {
            return props.theme.borderColor.primary;
        }};
        ${parseLogicalCSSProperty("border-bottom")}: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "1px";
                case 'large': return "2px";
            }
        }} solid ${(props: BarkThemeProps<AppBarProps>) => {
            return props.theme.borderColor.primary;
        }};
`;
