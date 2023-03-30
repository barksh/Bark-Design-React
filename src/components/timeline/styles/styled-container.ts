/**
 * @author WMXPY
 * @namespace Components_Timeline_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { TimelineProps } from "../declare";

export const TimelineStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: ${(props: BarkThemeProps<TimelineProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
        height: ${(props: BarkThemeProps<TimelineProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
`;
