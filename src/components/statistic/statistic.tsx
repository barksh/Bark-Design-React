/**
 * @author WMXPY
 * @namespace Components_Statistic
 * @description Statistic
 */

import * as React from "react";
import { ContentBlock } from "../content-block/content-block";
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

    return (<StatisticStyledTitle
        size={props.size}
        align={props.align}
    >
        {props.title}
    </StatisticStyledTitle>);
};

const StatisticDescription: React.FC<StatisticProps> = (props: StatisticProps) => {

    if (typeof props.description !== 'string'
        || props.description.length <= 0) {
        return null;
    }

    return (<StatisticStyledDescription
        size={props.size}
        align={props.align}
    >
        {props.description}
    </StatisticStyledDescription>);
};

export const Statistic: React.FC<StatisticProps> = (props: StatisticProps) => {

    return (<ContentBlock
        size={props.size}
        noBorder={props.noBorder}
        width={props.width}
        minWidth={props.minWidth}
        maxWidth={props.maxWidth}
        height={props.height}
        minHeight={props.minHeight}
        maxHeight={props.maxHeight}
        maximize={props.maximize}
        maximizeWidth={props.maximizeWidth}
        maximizeHeight={props.maximizeHeight}
    >
        <StatisticStyledContainer
            size={props.size}
        >
            <StatisticTitle
                {...props}
            />
            <StatisticStyledBody
                size={props.size}
                align={props.align}
            >
                {props.children}
            </StatisticStyledBody>
            <StatisticDescription
                {...props}
            />
        </StatisticStyledContainer>
    </ContentBlock>);
};
