/**
 * @author WMXPY
 * @namespace Components_Statistic
 * @description Statistic
 */

import * as React from "react";
import { ContentBlock } from "../export";
import { StatisticProps } from "./declare";
import { StatisticStyledBody } from "./styles/styled-body";
import { StatisticStyledContainer } from "./styles/styled-container";
import { StatisticStyledDescription } from "./styles/styled-description";
import { StatisticStyledTitle } from "./styles/styled-title";

const StatisticTitle: React.FC<StatisticProps> = (props: StatisticProps) => {

    if (typeof props.title !== 'string'
        || props.title.length <= 0) {
        return null;
    }

    return (<StatisticStyledTitle>
        {props.title}
    </StatisticStyledTitle>);
};

const StatisticDescription: React.FC<StatisticProps> = (props: StatisticProps) => {

    if (typeof props.description !== 'string'
        || props.description.length <= 0) {
        return null;
    }

    return (<StatisticStyledDescription>
        {props.description}
    </StatisticStyledDescription>);
};

export const Statistic: React.FC<StatisticProps> = (props: StatisticProps) => {

    return (<ContentBlock
        size={props.size}
        noBorder={props.noBorder}
    >
        <StatisticStyledContainer
            size={props.size}
        >
            <StatisticTitle
                {...props}
            />
            <StatisticStyledBody>
                {props.children}
            </StatisticStyledBody>
            <StatisticDescription
                {...props}
            />
        </StatisticStyledContainer>
    </ContentBlock>);
};
