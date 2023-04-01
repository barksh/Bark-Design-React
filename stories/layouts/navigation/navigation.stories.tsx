/**
 * @author WMXPY
 * @namespace Navigation
 * @description Navigation
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NavigationLayout, Theme } from "../../../src";

export default {
    title: "Navigation Layout",
    component: NavigationLayout,
} as ComponentMeta<typeof NavigationLayout>;

const Template: ComponentStory<typeof NavigationLayout> = (args: any) => {

    return (<Theme>
        <NavigationLayout
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
