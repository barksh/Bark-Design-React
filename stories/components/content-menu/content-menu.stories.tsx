/**
 * @author WMXPY
 * @namespace ContentMenu
 * @description Content Menu
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { ContentMenu, Theme } from "../../../src";

export default {
    title: "Content Menu",
    component: ContentMenu,
} as Meta<typeof ContentMenu>;

const Template: StoryFn<typeof ContentMenu> = (args: any) => {

    return (<Theme>
        <ContentMenu
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content Menu Content",
};
