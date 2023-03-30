/**
 * @author WMXPY
 * @namespace Components_Avatar_Styles
 * @description Styled Content Image
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const AvatarStyledContentImage: StyledComponent<"img", BarkThemeProps, any> =
    styled.img`
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        object-fit: cover;
`;
