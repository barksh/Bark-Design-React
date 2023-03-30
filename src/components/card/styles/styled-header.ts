/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Header
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { CardProps } from "../declare";

export const CardStyledHeader: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        ${parseLogicalCSSProperty("width")}: 100%;
        justify-content: center;
        align-items: stretch;
        ${parseLogicalCSSProperty("border-bottom")}: ${(props: BarkThemeProps<CardProps>) => {
            if (props.noSeparator) {
                return "0px";
            }
            return '1px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
`;
