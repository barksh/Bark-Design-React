/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const MenuStyledContainer: StyledComponent<"ul", BarkThemeProps, any> =
    styled.ul`
        list-style: none;
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
`;
