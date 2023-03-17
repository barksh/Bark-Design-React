/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Core Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const CardStyledCoreContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        flex-direction: row;
`;
