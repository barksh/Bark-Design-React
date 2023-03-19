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
        <div style={{
            width: '256px',
            height: '256px',
            border: '1px solid black',
        }}>
            <LoadingContainer
                {...args}
            />
        </div>
        <div style={{
            width: '256px',
            height: '128px',
            border: '1px solid black',
        }}>
            <LoadingContainer
                {...args}
            />
        </div>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Loading Container Content",
    loading: true,
    loadingPlaceholder: "Loading Container Placeholder",
};
