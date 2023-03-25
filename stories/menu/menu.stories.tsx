/**
 * @author WMXPY
 * @namespace Menu
 * @description Menu
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Menu, MenuItem, Theme } from "../../src";

export default {
    title: "Menu",
    component: Menu,
    subcomponents: {
        MenuItem,
    }
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args: any) => {

    return (<Theme>
        <Menu
            {...args}
        >
            <MenuItem
                title="Menu Item 1"
            />
            <MenuItem
                title="Menu Item 2"
            />
        </Menu>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Menu Content",
};
