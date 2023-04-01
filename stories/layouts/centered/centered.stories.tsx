/**
 * @author WMXPY
 * @namespace Centered
 * @description Centered
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CenteredLayout, Theme } from "../../../src";

export default {
    title: "Centered Layout",
    component: CenteredLayout,
} as ComponentMeta<typeof CenteredLayout>;

const Template: ComponentStory<typeof CenteredLayout> = (args: any) => {

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
