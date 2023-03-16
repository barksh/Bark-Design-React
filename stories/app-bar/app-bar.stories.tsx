/**
 * @author WMXPY
 * @namespace AppBar
 * @description App Bar
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AppBar, Theme } from "../../src";

export default {
    title: "App Bar",
    component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args: any) => {

    return (<Theme>
        <AppBar
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    title: "Header",
};
