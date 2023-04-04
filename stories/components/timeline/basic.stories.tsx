/**
 * @author WMXPY
 * @namespace Timeline
 * @description Basic
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Timeline, Theme, TimelineItem } from "../../../src";

export default {
    title: "Timeline",
    component: Timeline,
    subcomponents: {
        TimelineItem,
    },
} as Meta<typeof Timeline>;

const Template: StoryFn<typeof Timeline> = (args: any) => {

    return (<Theme>
        <Timeline
            {...args}
        >
            <TimelineItem>
                Timeline Item 1
            </TimelineItem>
            <TimelineItem>
                Timeline Item 2
                <br />
                Timeline Item 2
                <br />
                Timeline Item 2
                <br />
                Timeline Item 2
                <br />
                Timeline Item 2
            </TimelineItem>
            <TimelineItem>
                Timeline Item 3
            </TimelineItem>
        </Timeline>
    </Theme>);
};

export const Basic = Template.bind({});

Basic.args = {
    children: "Timeline Content",
};
