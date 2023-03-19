/**
 * @author WMXPY
 * @namespace Components_Statistic
 * @description Statistic
 */

import * as React from "react";
import { StatisticProps } from "./declare";
import { StatisticStyledContainer } from "./styles/styled-container";

export const Statistic: React.FC<StatisticProps> = (props: StatisticProps) => {

    return (<StatisticStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </StatisticStyledContainer>);
};
