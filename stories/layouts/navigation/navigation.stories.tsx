/**
 * @author WMXPY
 * @namespace Navigation
 * @description Navigation
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Menu, MenuItem, NavigationLayout, Theme } from "../../../src";

export default {
    title: "Navigation Layout",
    component: NavigationLayout,
} as ComponentMeta<typeof NavigationLayout>;

const Template: ComponentStory<typeof NavigationLayout> = (args: any) => {

    return (<Theme>
        <NavigationLayout
            {...args}
            navigation={<Menu
                maximizeWidth
                noBorder
                noSeparator
            >
                <MenuItem
                    title="Home"
                    onClick={() => {
                        // Nothing
                    }}
                />
                <MenuItem
                    title="About"
                    onClick={() => {
                        // Nothing
                    }}
                />
                <MenuItem
                    title="Contact"
                    onClick={() => {
                        // Nothing
                    }}
                />
                <MenuItem
                    title="Login"
                />
            </Menu>}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
