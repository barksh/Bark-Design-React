/**
 * @author WMXPY
 * @namespace Components_Tabs
 * @description Tab
 */

import * as React from "react";
import { ContentBlock } from "../content-block/content-block";
import { TabsProps } from "./declare";

export const Tab: React.FC<TabsProps> = (props: TabsProps) => {

    return (<ContentBlock
        size={props.size}
    >
        {props.title}
    </ContentBlock>);
};
