/**
 * @author WMXPY
 * @namespace Callout
 * @description Width Height
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Callout, Theme } from "../../../src";

export default {
    title: "Callout",
    component: Callout,
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args: any) => {

    return (<Theme>
        <Callout
            {...args}
            title="Title"
            maximizeWidth
            maximizeHeight
            prefix={<div>Prefix</div>}
        />
    </Theme>);
};

export const Maximize = Template.bind({});

Maximize.args = {
    children: "Content",
};
