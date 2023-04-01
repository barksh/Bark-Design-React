/**
 * @author WMXPY
 * @namespace ContentMenu
 * @description Content Menu
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ContentMenu, Theme } from "../../../src";

export default {
    title: "Content Menu",
    component: ContentMenu,
} as ComponentMeta<typeof ContentMenu>;

const Template: ComponentStory<typeof ContentMenu> = (args: any) => {

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
