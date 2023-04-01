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
        <div>Basic</div>
        <Callout
            {...args}
        />
        <div>With Title</div>
        <Callout
            {...args}
            title="Title"
        />
        <div>With Actions</div>
        <Callout
            {...args}
            actions={<div>Actions</div>}
        />
        <div>With Prefix</div>
        <Callout
            {...args}
            prefix={<div>Prefix</div>}
        />
        <div>With Suffix</div>
        <Callout
            {...args}
            suffix={<div>Suffix</div>}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
