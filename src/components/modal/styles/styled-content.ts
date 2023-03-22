/**
 * @author WMXPY
 * @namespace Components_Modal_Styles
 * @description Styled Content
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const ModalStyledContent: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: fit-content;
        height: fit-content;
        pointer-events: auto;
`;
