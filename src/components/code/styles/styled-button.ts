/**
 * @author WMXPY
 * @namespace Components_Code_Styles
 * @description Styled Button
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { CodeProps } from "../declare";
import { Button } from "../../export";

export const CodeStyledButton: StyledComponent<typeof Button, BarkThemeProps, any> =
    styled(Button)`
        position: absolute;
        z-index: ${(props: BarkThemeProps<CodeProps, {
        zIndex: number;
    }>) => {
            return props.zIndex;
        }};
        ${parseLogicalCSSProperty("top")}: ${(props: BarkThemeProps<CodeProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "3px";
                case 'large': return "4px";
            }
        }};
        ${parseLogicalCSSProperty("right")}: ${(props: BarkThemeProps<CodeProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "3px";
                case 'large': return "4px";
            }
        }};
`;
