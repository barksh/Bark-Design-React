/**
 * @author WMXPY
 * @namespace Components_SidePanel
 * @description Side Panel
 */

import * as React from "react";
import { ContentBlock } from "../content-block/content-block";
import { SidePanelProps } from "./declare";

export const SidePanel: React.FC<SidePanelProps> = (props: SidePanelProps) => {

    return (<ContentBlock
        size={props.size}
        noBorder={props.noBorder}
    >
    </ContentBlock>);
};
