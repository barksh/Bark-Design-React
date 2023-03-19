/**
 * @author WMXPY
 * @namespace Components_Statistic_Styles
 * @description Title
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { StatisticProps } from "../declare";

export const StatisticStyledTitle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        text-align: ${(props: BarkThemeProps<StatisticProps>) => {
            return props.align;
        }};
        font-size: ${(props: BarkThemeProps<StatisticProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "16px";
                case 'large': return "20px";
            }
        }};
`;
