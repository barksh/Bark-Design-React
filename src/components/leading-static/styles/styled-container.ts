/**
 * @author WMXPY
 * @namespace Components_LeadingStatic_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { LeadingStaticProps } from "../declare";

export const LeadingStaticStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<LeadingStaticProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "32px";
                case 'regular': return "48px";
                case 'large': return "64px";
            }
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<LeadingStaticProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "32px";
                case 'regular': return "48px";
                case 'large': return "64px";
            }
        }};
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
        border: ${(props: BarkThemeProps<LeadingStaticProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "1px";
                case 'large': return "2px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        ${parseLogicalCSSProperty("border-left")}: ${(props: BarkThemeProps<LeadingStaticProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
`;
