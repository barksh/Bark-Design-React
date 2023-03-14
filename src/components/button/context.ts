/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Context
 */

import * as React from "react";
import { ButtonProps } from "./declare";

export const ButtonContext: React.Context<Partial<ButtonProps>> =
    React.createContext<Partial<ButtonProps>>({
    });

export const useButtonContext = (props: ButtonProps): ButtonProps => {

    const context: Partial<ButtonProps> = React.useContext(ButtonContext);
    const enrichedProps: ButtonProps = {
        ...context,
        ...props,
    };

    return enrichedProps;
};
