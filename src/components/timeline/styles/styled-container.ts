/**
 * @author WMXPY
 * @namespace Components_Timeline_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { TimelineProps } from "../declare";

export const TimelineStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<TimelineProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<TimelineProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
`;
