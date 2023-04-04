/**
 * @author WMXPY
 * @namespace ProgressBar
 * @description Progress Bar
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { ProgressBar, Theme } from "../../../src";

export default {
    title: "Progress Bar",
    component: ProgressBar,
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args: any) => {

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
