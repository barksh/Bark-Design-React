/**
 * @author WMXPY
 * @namespace Components_Timeline
 * @description Timeline Item
 */

import * as React from "react";
import { TimelineComponentDefaultItemPrefix } from "./components/default-item-prefix";
import { useTimelineItemContext } from "./context/timeline-item";
import { TimelineItemProps } from "./declare";
import { TimelineStyledBarContainer } from "./styles/styled-item-bar-container";
import { TimelineStyledItemContainer } from "./styles/styled-item-container";
import { TimelineStyledItemContentContainer } from "./styles/styled-item-content-container";
import { TimelineStyledItemPrefixContainer } from "./styles/styled-item-prefix-container";

const TimelineItemPrefix: React.FC<TimelineItemProps> = (props: TimelineItemProps) => {

    if (props.prefix) {
        return (<React.Fragment>
            {props.prefix}
        </React.Fragment>);
    }

    return (<TimelineComponentDefaultItemPrefix
        {...props}
    />);
};

export const TimelineItem: React.FC<TimelineItemProps> = (props: TimelineItemProps) => {

    const enrichedProps: TimelineItemProps = useTimelineItemContext(props);

    return (<TimelineStyledItemContainer
        size={enrichedProps.size}
    >
        <TimelineStyledBarContainer
            size={enrichedProps.size}
        >
            <TimelineStyledItemPrefixContainer>
                <TimelineItemPrefix
                    {...enrichedProps}
                />
            </TimelineStyledItemPrefixContainer>
        </TimelineStyledBarContainer>
        <TimelineStyledItemContentContainer
            size={enrichedProps.size}
        >
            {enrichedProps.children}
        </TimelineStyledItemContentContainer>
    </TimelineStyledItemContainer>);
};
