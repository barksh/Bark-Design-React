/**
 * @author WMXPY
 * @namespace Components_Timeline_Styles
 * @description Styled Item Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { TimelineItemProps } from "../declare";
import { TimelineStyledItemPrefixContainer } from "./styled-item-prefix-container";

export const TimelineStyledItemContainer: StyledComponent<"li", BarkThemeProps, any> =
    styled.li`
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
        :not(:last-child) {
            ${TimelineStyledItemPrefixContainer}:before {
                z-index: -1;
                content: "";
                ${parseLogicalCSSProperty("height")}: calc(100% + ${(props: BarkThemeProps<TimelineItemProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "24px";
                case 'large': return "32px";
            }
        }});
                ${parseLogicalCSSProperty("width")}: 2px;
                position: absolute;
                ${parseLogicalCSSProperty("top")}: 0px;
                ${parseLogicalCSSProperty("left")}: calc(50% - 1px);
                background-color: ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
            }
        }
        &:first-child {
            ${TimelineStyledItemPrefixContainer}:before {
                ${parseLogicalCSSProperty("top")}: 50%;
            }
        }
        &:last-child:not(:only-child) {
            ${TimelineStyledItemPrefixContainer}:before {
                ${parseLogicalCSSProperty("height")}: 50%;
            }
        }
`;
