/**
 * @author WMXPY
 * @namespace Tabs
 * @description Tabs
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tabs, Theme } from "../../src";

export default {
    title: "Tabs",
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: any) => {

    return (<Theme>
        <Tabs
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    title: 'Title',
};
