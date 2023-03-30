/**
 * @author WMXPY
 * @namespace Components_ActionBar
 * @description Action Bar
 */

import * as React from "react";
import { ActionBarProps } from "./declare";
import { ActionBarStyledContainer } from "./styles/styled-container";

export const ActionBar: React.FC<ActionBarProps> = (props: ActionBarProps) => {

    return (<ActionBarStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </ActionBarStyledContainer>);
};
