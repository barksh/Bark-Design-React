/**
 * @author WMXPY
 * @namespace Breadcrumbs
 * @description Breadcrumbs
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Breadcrumbs, Theme } from "../../../src";

export default {
    title: "Breadcrumbs",
    component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;

const Template: StoryFn<typeof Breadcrumbs> = (args: any) => {

    return (<Theme>
        <Breadcrumbs
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
