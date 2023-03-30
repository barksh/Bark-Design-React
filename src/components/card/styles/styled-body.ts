/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Body
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { CardProps } from "../declare";

export const CardStyledBody: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        font-size: ${(props: BarkThemeProps<CardProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "14px";
                case 'regular': return "16px";
                case 'large': return "18px";
            }
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.secondary;
        }};
`;
