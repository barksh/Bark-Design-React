/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Card Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const CardStyledCardContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
`;
