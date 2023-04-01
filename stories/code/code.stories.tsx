/**
 * @author WMXPY
 * @namespace Code
 * @description Code
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Code, Theme } from "../../src";

export default {
    title: "Code",
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args: any) => {

    return (<Theme>
        <Code
            {...args}
        />
        <div>Copyable</div>
        <Code
            {...args}
            copyButton="Copy"
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    language: "raw",
    wrap: true,
    break: false,
    children: "Content ".repeat(100),
};
