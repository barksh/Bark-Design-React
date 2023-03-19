/**
 * @author WMXPY
 * @namespace Components_Statistic_Styles
 * @description Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { StatisticProps } from "../declare";

export const StatisticStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        padding: ${(props: BarkThemeProps<StatisticProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px 8px";
                case 'regular': return "2px 10px";
                case 'large': return "4px 16px";
            }
        }};
`;
