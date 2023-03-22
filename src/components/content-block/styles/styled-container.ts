/**
 * @author WMXPY
 * @namespace Components_ContentBlock_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { fixWidthHeight } from "../../../util/width-height";
import { ContentBlockProps } from "../declare";

export const ContentBlockStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
        width: ${(props: BarkThemeProps<ContentBlockProps>) => {
            if (typeof props.width !== 'undefined') {
                return fixWidthHeight(props.width);
            }
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
        height: ${(props: BarkThemeProps<ContentBlockProps>) => {
            if (typeof props.height !== 'undefined') {
                return fixWidthHeight(props.height);
            }
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
        border: ${(props: BarkThemeProps<ContentBlockProps>) => {
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
        border-right: ${(props: BarkThemeProps<ContentBlockProps>) => {
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
