/**
 * @author WMXPY
 * @namespace LoadingContainer
 * @description Loading Container
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoadingContainer, Theme } from "../../src";

export default {
    title: "Loading Container",
    component: LoadingContainer,
} as ComponentMeta<typeof LoadingContainer>;

const Template: ComponentStory<typeof LoadingContainer> = (args: any) => {

    return (<Theme>
        <LoadingContainer
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Loading Container Content",
    loading: true,
    placeholder: "Loading Container Placeholder",
};
