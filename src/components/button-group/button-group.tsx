/**
 * @author WMXPY
 * @namespace Components_ButtonGroup
 * @description Button Group
 */

import * as React from "react";
import { ButtonContext } from "../button/context";
import { useButtonGroupContext } from "./context";
import { ButtonGroupProps } from "./declare";
import { ButtonGroupStyledContainer } from "./styles/styled-container";

export const ButtonGroup: React.FC<ButtonGroupProps> = (props: ButtonGroupProps) => {

    const enrichedProps: ButtonGroupProps = useButtonGroupContext(props);

    return (<ButtonGroupStyledContainer
        size={enrichedProps.size}
        noBorder={enrichedProps.noBorder}
        noSeparator={enrichedProps.noSeparator}
        maximize={enrichedProps.maximize}
    >
        <ButtonContext.Provider
            value={{
                noBorder: true,
                size: enrichedProps.size,
                keepVisible: enrichedProps.keepVisible,
                flex: 1,
            }}
        >
            {enrichedProps.children}
        </ButtonContext.Provider>
    </ButtonGroupStyledContainer>);
};
