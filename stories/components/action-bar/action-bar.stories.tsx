/**
 * @author WMXPY
 * @namespace ActionBar
 * @description Action Bar
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { ActionBar, Theme } from "../../../src";

export default {
    title: "Action Bar",
    component: ActionBar,
} as Meta<typeof ActionBar>;

const Template: StoryFn<typeof ActionBar> = (args: any) => {

    return (<Theme>
        <ActionBar
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
