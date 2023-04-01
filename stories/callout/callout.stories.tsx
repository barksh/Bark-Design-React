/**
 * @author WMXPY
 * @namespace Callout
 * @description Callout
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Callout, Theme } from "../../src";

export default {
    title: "Callout",
    component: Callout,
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args: any) => {

    return (<Theme>
        <Callout
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
