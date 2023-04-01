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
        balancedBorder={enrichedProps.balancedBorder}
        noBorderTop={enrichedProps.noBorderTop}
        noBorderBottom={enrichedProps.noBorderBottom}
        noBorderLeft={enrichedProps.noBorderLeft}
        noBorderRight={enrichedProps.noBorderRight}
        noSeparator={enrichedProps.noSeparator}
        maximize={enrichedProps.maximize}
        maximizeWidth={enrichedProps.maximizeWidth}
        maximizeHeight={enrichedProps.maximizeHeight}
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
