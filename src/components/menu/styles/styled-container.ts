/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const MenuStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
`;
