/**
 * @author WMXPY
 * @namespace Callout
 * @description Width Height
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
        <div>With Width Height, Prefix and Title</div>
        <Callout
            {...args}
            title="Title"
            width={512}
            height={512}
            prefix={<div>Prefix</div>}
        />
    </Theme>);
};

export const WidthHeight = Template.bind({});

WidthHeight.args = {
    children: "Content",
};
