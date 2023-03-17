/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Header Prefix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { CardProps } from "../declare";

export const CardStyledHeaderPrefixContainer: StyledComponent<"div", BarkThemeProps, any> =
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
        border-right: ${(props: BarkThemeProps<CardProps>) => {
            if (props.noSeparator) {
                return "0px";
            }
            return '1px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
`;
