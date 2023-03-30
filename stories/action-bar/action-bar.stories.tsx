/**
 * @author WMXPY
 * @namespace ActionBar
 * @description Action Bar
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ActionBar, Theme } from "../../src";

export default {
    title: "Action Bar",
    component: ActionBar,
} as ComponentMeta<typeof ActionBar>;

const Template: ComponentStory<typeof ActionBar> = (args: any) => {

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
