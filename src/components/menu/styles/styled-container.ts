/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const MenuStyledContainer: StyledComponent<"ul", BarkThemeProps, any> =
    styled.ul`
        list-style: none;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
`;
