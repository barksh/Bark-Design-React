/**
 * @author WMXPY
 * @namespace Components_Statistic_Styles
 * @description Body
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { StatisticProps } from "../declare";

export const StatisticStyledBody: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
        text-align: ${(props: BarkThemeProps<StatisticProps>) => {
            return props.align;
        }};
        font-size: ${(props: BarkThemeProps<StatisticProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "20px";
                case 'regular': return "24px";
                case 'large': return "28px";
            }
        }};
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
`;
