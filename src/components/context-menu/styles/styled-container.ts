/**
 * @author WMXPY
 * @namespace Components_ContentMenu_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { ContentMenuProps } from "../declare";

export const ContentMenuStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<ContentMenuProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<ContentMenuProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
        border: ${(props: BarkThemeProps<ContentMenuProps>) => {
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
        ${parseLogicalCSSProperty("border-right")}: ${(props: BarkThemeProps<ContentMenuProps>) => {
            if (props.noBorder) {
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
`;
