/**
 * @author WMXPY
 * @namespace Components_Callout_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { CalloutProps } from "../declare";
import { fixSizeProps } from "../../../util/size";

export const CalloutStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<CalloutProps, {
        readonly shouldFullWidth: boolean;
        readonly shouldFullHeight: boolean;
    }>) => {
            if (props.maximize || props.maximizeWidth || props.shouldFullWidth) {
                return "100%";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case "small": return "256px";
                case "regular": return "256px";
                case "large": return "384px";
            }
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<CalloutProps, {
            readonly shouldFullWidth: boolean;
            readonly shouldFullHeight: boolean;
        }>) => {
            if (props.maximize || props.maxHeight || props.shouldFullHeight) {
                return "100%";
            }
            return "auto";
        }};
`;
