/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Suffix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { CardProps } from "../declare";

export const CardStyledSuffixContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        font-size: ${(props: BarkThemeProps<CardProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "14px";
                case 'regular': return "14px";
                case 'large': return "20px";
            }
        }};
        ${parseLogicalCSSProperty("padding-top")}: ${(props: BarkThemeProps<CardProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }};
        ${parseLogicalCSSProperty("padding-right")}: ${(props: BarkThemeProps<CardProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "6px";
                case 'regular': return "8px";
                case 'large': return "10px";
            }
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
