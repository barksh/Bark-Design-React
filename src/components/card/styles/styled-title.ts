/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Title
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { CardProps } from "../declare";

export const CardStyledTitle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        font-weight: bold;
        font-size: ${(props: BarkThemeProps<CardProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "18px";
                case 'large': return "20px";
            }
        }};
`;
