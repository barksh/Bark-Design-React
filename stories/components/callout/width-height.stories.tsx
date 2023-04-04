/**
 * @author WMXPY
 * @namespace Callout
 * @description Width Height
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Callout, Theme } from "../../../src";

export default {
    title: "Callout",
    component: Callout,
} as Meta<typeof Callout>;

const Template: StoryFn<typeof Callout> = (args: any) => {

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
