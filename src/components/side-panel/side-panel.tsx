/**
 * @author WMXPY
 * @namespace Components_SidePanel
 * @description Side Panel
 */

import * as React from "react";
import { ContentBlock } from "../content-block/content-block";
import { SidePanelProps } from "./declare";
import { SidePanelStyledContainer } from "./styles/styled-container";

export const SidePanel: React.FC<SidePanelProps> = (props: SidePanelProps) => {

    return (<ContentBlock
        size={props.size}
        balancedBorder
        noBorder={props.noBorder}
    >
        <SidePanelStyledContainer
            size={props.size}
        >
            {props.children}
        </SidePanelStyledContainer>
    </ContentBlock>);
};
