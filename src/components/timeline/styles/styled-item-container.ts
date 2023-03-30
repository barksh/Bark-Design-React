/**
 * @author WMXPY
 * @namespace Components_Timeline_Styles
 * @description Styled Item Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
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
                height: calc(100% + ${(props: BarkThemeProps<TimelineItemProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "24px";
                case 'large': return "32px";
            }
        }});
                width: 2px;
                position: absolute;
                top: 0px;
                left: calc(50% - 1px);
                background-color: ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
            }
        }
        &:first-child {
            ${TimelineStyledItemPrefixContainer}:before {
                top: 50%;
            }
        }
        &:last-child:not(:only-child) {
            ${TimelineStyledItemPrefixContainer}:before {
                height: 50%;
            }
        }
`;
