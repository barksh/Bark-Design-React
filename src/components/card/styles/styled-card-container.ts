/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Card Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { CardProps } from "../declare";

export const CardStyledCardContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        flex-direction: column;
        min-width: ${(props: BarkThemeProps<CardProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "256px";
                case 'regular': return "256px";
                case 'large': return "512px";
            }
        }};
`;
