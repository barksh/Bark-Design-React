/**
 * @author WMXPY
 * @namespace Components_Timeline_Styles
 * @description Styled Item Content Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { TimelineProps } from "../declare";

export const TimelineStyledItemContentContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        padding: ${(props: BarkThemeProps<TimelineProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "0px 4px";
                case 'regular': return "2px 8px";
                case 'large': return "4px 12px";
            }
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
