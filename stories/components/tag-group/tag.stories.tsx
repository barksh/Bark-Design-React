/**
 * @author WMXPY
 * @namespace TagGroup
 * @description Tag Group
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { TagGroup, Theme } from "../../../src";

export default {
    title: "Tag Group",
    component: TagGroup,
} as Meta<typeof TagGroup>;

const Template: StoryFn<typeof TagGroup> = (args: any) => {

    return (<Theme>
        <TagGroup
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
