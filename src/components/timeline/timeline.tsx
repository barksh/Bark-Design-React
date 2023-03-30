/**
 * @author WMXPY
 * @namespace Components_Timeline
 * @description Timeline
 */

import * as React from "react";
import { TimelineItemContext } from "./context/timeline-item";
import { TimelineProps } from "./declare";
import { TimelineStyledContainer } from "./styles/styled-container";
import { TimelineStyledList } from "./styles/styled-list";

export const Timeline: React.FC<TimelineProps> = (props: TimelineProps) => {

    return (<TimelineItemContext.Provider
        value={{
            size: props.size,
        }}
    >
        <TimelineStyledContainer
            size={props.size}
            maximize={props.maximize}
            noBorder={props.noBorder}
        >
            <TimelineStyledList>
                {props.children}
            </TimelineStyledList>
        </TimelineStyledContainer>
    </TimelineItemContext.Provider>);
};
