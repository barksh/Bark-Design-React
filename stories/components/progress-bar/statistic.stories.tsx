/**
 * @author WMXPY
 * @namespace ProgressBar
 * @description Progress Bar
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProgressBar, Theme } from "../../../src";

export default {
    title: "Progress Bar",
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args: any) => {

    return (<Theme>
        <ProgressBar
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    title: "Title",
    information: "Information",
    progress: 50,
    total: 100,
};
