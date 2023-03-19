/**
 * @author WMXPY
 * @namespace Components_Statistic_Styles
 * @description Description
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { StatisticProps } from "../declare";

export const StatisticStyledDescription: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.secondary;
        }};
        text-align: ${(props: BarkThemeProps<StatisticProps>) => {
            return props.align;
        }};
        font-size: ${(props: BarkThemeProps<StatisticProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "14px";
                case 'regular': return "14px";
                case 'large': return "16px";
            }
        }};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
`;
