/**
 * @author WMXPY
 * @namespace Navigation
 * @description Navigation
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Menu, MenuItem, MenuSeparator, NavigationLayout, Theme } from "../../../src";

export default {
    title: "Navigation Layout",
    component: NavigationLayout,
} as Meta<typeof NavigationLayout>;

const Template: StoryFn<typeof NavigationLayout> = (args: any) => {

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
                <MenuSeparator />
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
