/**
 * @author WMXPY
 * @namespace Menu
 * @description Menu
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Menu, Theme } from "../../src";

export default {
    title: "Menu",
    component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args: any) => {

    return (<Theme>
        <Menu
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Menu Content",
};
