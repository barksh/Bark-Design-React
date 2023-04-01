/**
 * @author WMXPY
 * @namespace Components_Separator_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { SeparatorProps } from "../declare";

export const SeparatorStyledSeparator: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<SeparatorProps>) => {
            if (props.direction === "vertical") {
                const fixedSize = fixSizeProps(props.size);
                switch (fixedSize) {
                    case 'small': return "1px";
                    case 'regular': return "1px";
                    case 'large': return "2px";
                }
            }
            return "auto";
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<SeparatorProps>) => {
            if (props.direction === "horizontal") {
                const fixedSize = fixSizeProps(props.size);
                switch (fixedSize) {
                    case 'small': return "1px";
                    case 'regular': return "1px";
                    case 'large': return "2px";
                }
            }
            return "auto";
        }};
        background-color: ${(props: BarkThemeProps<SeparatorProps>) => {
            return props.theme.borderColor.primary;
        }};
        ${parseLogicalCSSProperty("margin-left")}: ${(props: BarkThemeProps<SeparatorProps>) => {
            if (props.direction === "horizontal") {
                return "0px";
            }
            if (props.withMargin) {
                const fixedSize = fixSizeProps(props.size);
                switch (fixedSize) {
                    case 'small': return "2px";
                    case 'regular': return "4px";
                    case 'large': return "8px";
                }
            }
            return "0px";
        }};
        ${parseLogicalCSSProperty("margin-right")}: ${(props: BarkThemeProps<SeparatorProps>) => {
            if (props.direction === "horizontal") {
                return "0px";
            }
            if (props.withMargin) {
                const fixedSize = fixSizeProps(props.size);
                switch (fixedSize) {
                    case 'small': return "2px";
                    case 'regular': return "4px";
                    case 'large': return "8px";
                }
            }
            return "0px";
        }};
        ${parseLogicalCSSProperty("margin-top")}: ${(props: BarkThemeProps<SeparatorProps>) => {
            if (props.direction === "vertical") {
                return "0px";
            }
            if (props.withMargin) {
                const fixedSize = fixSizeProps(props.size);
                switch (fixedSize) {
                    case 'small': return "2px";
                    case 'regular': return "4px";
                    case 'large': return "8px";
                }
            }
            return "0px";
        }};
        ${parseLogicalCSSProperty("margin-bottom")}: ${(props: BarkThemeProps<SeparatorProps>) => {
            if (props.direction === "vertical") {
                return "0px";
            }
            if (props.withMargin) {
                const fixedSize = fixSizeProps(props.size);
                switch (fixedSize) {
                    case 'small': return "2px";
                    case 'regular': return "4px";
                    case 'large': return "8px";
                }
            }
            return "0px";
        }};
`;
