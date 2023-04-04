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
