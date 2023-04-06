/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Header
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps, limitSizeProps } from "../../../util/size";
import { CardProps } from "../declare";

export const CardStyledHeader: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        justify-content: center;
        align-items: stretch;
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("border-bottom")}: ${(props: BarkThemeProps<CardProps>) => {
            if (props.noSeparator) {
                return "0px";
            }
            return '1px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        ${parseLogicalCSSProperty("min-height")}: ${(props: BarkThemeProps<CardProps>) => {
            const fixedSize = limitSizeProps(
                fixSizeProps(props.size),
                ['small', 'regular'],
                'regular',
            );
            switch (fixedSize) {
                case 'small': return "32px";
                case 'regular': return "48px";
                case 'large': return "48px";
            }
        }};
`;
