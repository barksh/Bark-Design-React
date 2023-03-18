/**
 * @author WMXPY
 * @namespace Components_Avatar_Styles
 * @description Styled Content Image
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const AvatarStyledContentImage: StyledComponent<"img", BarkThemeProps, any> =
    styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
`;
