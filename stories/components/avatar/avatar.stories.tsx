/**
 * @author WMXPY
 * @namespace Avatar
 * @description Avatar
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Avatar, Theme } from "../../../src";

export default {
    title: "Avatar",
    component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args: any) => {

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
