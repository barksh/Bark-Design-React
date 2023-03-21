/**
 * @author WMXPY
 * @namespace Components_Card
 * @description Card
 */

import * as React from "react";
import { ButtonContext } from "../button/context";
import { ContentBlock } from "../content-block/content-block";
import { CardActions } from "./card-actions";
import { CardHeader } from "./card-header";
import { useCardContext } from "./context";
import { CardProps } from "./declare";
import { CardStyledBody } from "./styles/styled-body";
import { CardStyledCardContainer } from "./styles/styled-card-container";
import { CardStyledContentContainer } from "./styles/styled-content-container";
import { CardStyledCoreContainer } from "./styles/styled-core-container";
import { CardStyledPrefixContainer } from "./styles/styled-prefix-container";
import { CardStyledSuffixContainer } from "./styles/styled-suffix-container";
import { CardStyledTitle } from "./styles/styled-title";

const CardPrefix: React.FC<CardProps> = (props: CardProps) => {

    if (props.bodyPrefix) {
        return (<ButtonContext.Provider
            value={{
                noBorder: true,
                size: props.size,
            }}
        >
            <CardStyledPrefixContainer
                size={props.size}
            >
                {props.bodyPrefix}
            </CardStyledPrefixContainer>
        </ButtonContext.Provider>);
    }
    return null;
};

const CardSuffix: React.FC<CardProps> = (props: CardProps) => {

    if (props.bodySuffix) {
        return (<ButtonContext.Provider
            value={{
                noBorder: true,
                size: props.size,
            }}
        >
            <CardStyledSuffixContainer
                size={props.size}
            >
                {props.bodySuffix}
            </CardStyledSuffixContainer>
        </ButtonContext.Provider>);
    }
    return null;
};

export const Card: React.FC<CardProps> = (props: CardProps) => {

    const enrichedProps: CardProps = useCardContext(props);

    return (<ContentBlock
        loading={enrichedProps.loading}
        loadingPlaceholder={enrichedProps.loadingPlaceholder}
        loadingProvider={enrichedProps.loadingProvider}
        size={enrichedProps.size}
        noBorder={enrichedProps.noBorder}
        maximize={enrichedProps.maximize}
        width={enrichedProps.width}
        height={enrichedProps.height}
    >
        <CardStyledCardContainer
            size={enrichedProps.size}
        >
            <CardHeader
                {...enrichedProps}
            />
            <CardStyledCoreContainer>
                <CardPrefix
                    {...enrichedProps}
                />
                <CardStyledContentContainer
                    size={enrichedProps.size}
                >
                    <CardStyledTitle
                        size={enrichedProps.size}
                    >
                        {enrichedProps.bodyTitle}
                    </CardStyledTitle>
                    <CardStyledBody
                        size={enrichedProps.size}
                    >
                        {enrichedProps.children}
                    </CardStyledBody>

                </CardStyledContentContainer>
                <CardSuffix
                    {...enrichedProps}
                />
            </CardStyledCoreContainer>
            <CardActions
                {...enrichedProps}
            />
        </CardStyledCardContainer>
    </ContentBlock>);
};
