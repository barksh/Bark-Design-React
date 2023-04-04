/**
 * @author WMXPY
 * @namespace Centered
 * @description Centered
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { CenteredLayout, Theme } from "../../../src";

export default {
    title: "Centered Layout",
    component: CenteredLayout,
} as Meta<typeof CenteredLayout>;

const Template: StoryFn<typeof CenteredLayout> = (args: any) => {

    return (<Theme>
        <CenteredLayout
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
