/**
 * @author WMXPY
 * @namespace Components_Timeline_Styles
 * @description Styled Item Prefix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const TimelineStyledItemPrefixContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("height")}: 100%;
`;
