/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Content Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { CardProps } from "../declare";

export const CardStyledContentContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        flex: 1;
        padding: ${(props: BarkThemeProps<CardProps>) => {
            if (props.noPadding) {
                return "0px";
            }

            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "6px";
                case 'regular': return "8px";
                case 'large': return "12px";
            }
        }};
`;
