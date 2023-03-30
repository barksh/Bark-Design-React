/**
 * @author WMXPY
 * @namespace Components_Timeline_Component_Styles
 * @description Styled Default Item Prefix Circle
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../../util/size";
import { TimelineItemProps } from "../../declare";

export const TimelineComponentStyledDefaultItemPrefixCircle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<TimelineItemProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "8px";
                case 'regular': return "12px";
                case 'large': return "16px";
            }
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<TimelineItemProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "8px";
                case 'regular': return "12px";
                case 'large': return "16px";
            }
        }};
        border-radius: 50%;
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
`;
