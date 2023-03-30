/**
 * @author WMXPY
 * @namespace Components_Timeline_Components
 * @description Default Item Prefix
 */

import * as React from "react";
import { TimelineItemProps } from "../declare";
import { TimelineComponentStyledDefaultItemPrefixCircle } from "./styles/styled-default-item-prefix-circle";
import { TimelineComponentStyledDefaultItemPrefixContainer } from "./styles/styled-default-item-prefix-container";

export const TimelineComponentDefaultItemPrefix: React.FC<TimelineItemProps> = (props: TimelineItemProps) => {

    return (<TimelineComponentStyledDefaultItemPrefixContainer
        size={props.size}
    >
        <TimelineComponentStyledDefaultItemPrefixCircle
            size={props.size}
        />
    </TimelineComponentStyledDefaultItemPrefixContainer>);
};
