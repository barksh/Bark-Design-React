/**
 * @author WMXPY
 * @namespace Components_Callout_Styles
 * @description Styled Suffix
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { CalloutProps } from "../declare";

export const CalloutStyledSuffix: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        writing-mode: ${(props: BarkThemeProps<CalloutProps>) => {
            if (props.verticalSuffix) {
                return "vertical-lr";
            }
            return "initial";
        }};
        text-orientation: mixed;
        ${(props: BarkThemeProps<CalloutProps>) => {
            if (props.verticalSuffix) {
                return parseLogicalCSSProperty("border-top");
            }
            return parseLogicalCSSProperty("border-left");
        }}: ${(props: BarkThemeProps<CalloutProps>) => {
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
