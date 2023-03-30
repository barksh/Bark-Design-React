/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Header Title
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { CardProps } from "../declare";

export const CardStyledHeaderTitle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: ${(props: BarkThemeProps<CardProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "18px";
                case 'large': return "20px";
            }
        }};
        ${parseLogicalCSSProperty("padding-left")}: ${(props: BarkThemeProps<CardProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "6px";
                case 'regular': return "8px";
                case 'large': return "10px";
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
