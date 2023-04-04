/**
 * @author WMXPY
 * @namespace Tag
 * @description Tag
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Tag, Theme } from "../../../src";

export default {
    title: "Tag",
    component: Tag,
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args: any) => {

    return (<Theme>
        <Tag
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
