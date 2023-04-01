/**
 * @author WMXPY
 * @namespace Components_Callout_Styles
 * @description Styled Prefix
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { CalloutProps } from "../declare";
import { fixSizeProps } from "../../../util/size";

export const CalloutStyledPrefix: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("border-right")}: ${(props: BarkThemeProps<CalloutProps>) => {
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
