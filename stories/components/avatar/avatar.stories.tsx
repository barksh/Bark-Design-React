/**
 * @author WMXPY
 * @namespace Avatar
 * @description Avatar
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar, Theme } from "../../../src";

export default {
    title: "Avatar",
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: any) => {

    return (<Theme>
        <Avatar
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    imageUrl: "https://picsum.photos/200/300",
    name: "John Doe",
};
