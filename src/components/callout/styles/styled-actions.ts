/**
 * @author WMXPY
 * @namespace Components_Callout_Styles
 * @description Styled Actions
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { CalloutProps } from "../declare";
import { fixSizeProps } from "../../../util/size";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const CalloutStyledActions: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        align-self: flex-end;
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
        ${parseLogicalCSSProperty("padding-top")}: ${(props: BarkThemeProps<CalloutProps>) => {
            if (props.noPadding) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "8px";
                case 'regular': return "12px";
                case 'large': return "16px";
            }
        }};
`;
