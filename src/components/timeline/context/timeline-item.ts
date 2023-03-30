/**
 * @author WMXPY
 * @namespace Components_Timeline_Context
 * @description Timeline Item
 */

import * as React from "react";
import { TimelineItemProps } from "../declare";

export const TimelineItemContext: React.Context<Partial<TimelineItemProps>> =
    React.createContext<Partial<TimelineItemProps>>({
    });

export const useTimelineItemContext = (props: TimelineItemProps): TimelineItemProps => {

    const context: Partial<TimelineItemProps> = React.useContext(TimelineItemContext);
    const enrichedProps: TimelineItemProps = {
        ...context,
        ...props,
    };

    return enrichedProps;
};
