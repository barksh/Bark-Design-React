/**
 * @author WMXPY
 * @namespace Components_Timeline_Styles
 * @description Styled Bar Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { TimelineProps } from "../declare";

export const TimelineStyledBarContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        position: relative;
        ${parseLogicalCSSProperty("height")}: inherit;
        ${parseLogicalCSSProperty("padding-top")}: ${(props: BarkThemeProps<TimelineProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "5px";
                case 'large': return "6px";
            }
        }};
`;
