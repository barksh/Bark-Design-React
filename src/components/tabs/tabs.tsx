/**
 * @author WMXPY
 * @namespace Components_Tabs
 * @description Tabs
 */

import * as React from "react";
import { ContentBlock } from "../content-block/content-block";
import { TabsProps } from "./declare";

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {

    return (<ContentBlock
        size={props.size}
    >
        {props.title}
    </ContentBlock>);
};
