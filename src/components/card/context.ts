/**
 * @author WMXPY
 * @namespace Components_Card
 * @description Context
 */

import * as React from "react";
import { CardProps } from "./declare";

export const CardContext: React.Context<Partial<CardProps>> =
    React.createContext<Partial<CardProps>>({
    });

export const useCardContext = (props: CardProps): CardProps => {

    const context: Partial<CardProps> = React.useContext(CardContext);
    const enrichedProps: CardProps = {
        ...context,
        ...props,
    };

    return enrichedProps;
};
