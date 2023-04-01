/**
 * @author WMXPY
 * @namespace Timeline
 * @description Leading
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Button, LeadingDynamic, LeadingStatic, Theme, Timeline, TimelineItem } from "../../../src";

export default {
    title: "Timeline",
    component: Timeline,
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args: any) => {

    const [loading, setLoading] = useState<boolean>(false);

    return (<Theme>
        <Button
            {...args}
            onClick={() => setLoading(!loading)}
            noPrefixPadding={true}
        >
            Trigger Loading
        </Button>
        <Timeline
            {...args}
        >
            <TimelineItem
                prefix={<LeadingStatic
                    size={args.size}
                >
                    <FaCheck
                        size={24}
                    />
                </LeadingStatic>}
            >
                Timeline Item 1
            </TimelineItem>
            <TimelineItem
                prefix={<LeadingDynamic
                    size={args.size}
                    loading={loading}
                >
                    <FaCheck
                        size={24}
                    />
                </LeadingDynamic>}
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

export const WithLeading = Template.bind({});

WithLeading.args = {
    children: "Timeline Content",
};
