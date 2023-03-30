/**
 * @author WMXPY
 * @namespace Tag
 * @description Tag
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tag, Theme } from "../../src";

export default {
    title: "Tag",
    component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args: any) => {

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
