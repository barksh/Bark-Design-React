/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Actions
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { CardProps } from "../declare";

export const CardStyledActions: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: 100%;
        border-top: ${(props: BarkThemeProps<CardProps>) => {
            if (props.noSeparator) {
                return "0px";
            }
            return '1px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
`;
