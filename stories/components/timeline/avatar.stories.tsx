/**
 * @author WMXPY
 * @namespace Timeline
 * @description Avatar
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar, Theme, Timeline, TimelineItem } from "../../../src";

export default {
    title: "Timeline",
    component: Timeline,
    subcomponents: {
        Avatar,
        TimelineItem,
    },
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args: any) => {

    return (<Theme>
        <Timeline
            {...args}
        >
            <TimelineItem
                prefix={<Avatar
                    imageUrl="https://picsum.photos/200/300"
                    size={args.size}
                />}
            >
                Timeline Item 1
            </TimelineItem>
            <TimelineItem
                prefix={<Avatar
                    name="John Doe"
                    size={args.size}
                />}
            >
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

export const WithAvatar = Template.bind({});

WithAvatar.args = {
    children: "Timeline Content",
};
