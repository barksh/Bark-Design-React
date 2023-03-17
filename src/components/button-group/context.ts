/**
 * @author WMXPY
 * @namespace Components_ButtonGroup
 * @description Context
 */

import * as React from "react";
import { ButtonGroupProps } from "./declare";

export const ButtonGroupContext: React.Context<Partial<ButtonGroupProps>> =
    React.createContext<Partial<ButtonGroupProps>>({
    });

export const useButtonGroupContext = (props: ButtonGroupProps): ButtonGroupProps => {

    const context: Partial<ButtonGroupProps> = React.useContext(ButtonGroupContext);
    const enrichedProps: ButtonGroupProps = {
        ...context,
        ...props,
    };

    return enrichedProps;
};
