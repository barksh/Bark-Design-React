/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Header Suffix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { CardProps } from "../declare";

export const CardStyledHeaderSuffixContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${(props: BarkThemeProps<CardProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "18px";
                case 'large': return "20px";
            }
        }};
        ${parseLogicalCSSProperty("border-left")}: ${(props: BarkThemeProps<CardProps>) => {
            if (props.noSeparator) {
                return "0px";
            }
            return '1px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
