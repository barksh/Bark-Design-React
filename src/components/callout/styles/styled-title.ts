/**
 * @author WMXPY
 * @namespace Components_Callout_Styles
 * @description Styled Title
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { CalloutProps } from "../declare";
import { fixSizeProps } from "../../../util/size";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const CalloutStyledTitle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        font-weight: bold;
        font-size: ${(props: BarkThemeProps<CalloutProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "18px";
                case 'large': return "20px";
            }
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
        ${parseLogicalCSSProperty("border-bottom")}: ${(props: BarkThemeProps<CalloutProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "1px";
                case 'large': return "1px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        padding: ${(props: BarkThemeProps<CalloutProps>) => {
            if (props.noPadding) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }};
`;
