/**
 * @author WMXPY
 * @namespace Components_Timeline_Styles
 * @description Styled List
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const TimelineStyledList: StyledComponent<"ol", BarkThemeProps, any> =
    styled.ol`
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        column-gap: 0.5rem;
        row-gap: 0.5rem;
`;
