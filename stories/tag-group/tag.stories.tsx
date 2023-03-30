/**
 * @author WMXPY
 * @namespace TagGroup
 * @description Tag Group
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TagGroup, Theme } from "../../src";

export default {
    title: "Tag Group",
    component: TagGroup,
} as ComponentMeta<typeof TagGroup>;

const Template: ComponentStory<typeof TagGroup> = (args: any) => {

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
