/**
 * @author WMXPY
 * @namespace Breadcrumbs
 * @description Breadcrumbs
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Breadcrumbs, Theme } from "../../src";

export default {
    title: "Breadcrumbs",
    component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args: any) => {

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
