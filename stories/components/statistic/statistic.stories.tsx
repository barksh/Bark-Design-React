/**
 * @author WMXPY
 * @namespace Statistic
 * @description Statistic
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Statistic, Theme } from "../../../src";

export default {
    title: "Statistic",
    component: Statistic,
} as ComponentMeta<typeof Statistic>;

const Template: ComponentStory<typeof Statistic> = (args: any) => {

    return (<Theme>
        <Statistic
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    title: "Title",
    description: "Description",
    children: "Content",
};
