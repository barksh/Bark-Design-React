/**
 * @author WMXPY
 * @namespace LoadingContainerRectangle
 * @description Loading Container Rectangle
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoadingContainerRectangle, Theme } from "../../../src";

export default {
    title: "Loading Container",
    component: LoadingContainerRectangle,
} as ComponentMeta<typeof LoadingContainerRectangle>;

const Template: ComponentStory<typeof LoadingContainerRectangle> = (args: any) => {

    return (<Theme>
        <div style={{
            width: '256px',
            height: '256px',
            border: '1px solid black',
        }}>
            <LoadingContainerRectangle
                {...args}
            />
        </div>
        <div style={{
            width: '256px',
            height: '128px',
            border: '1px solid black',
        }}>
            <LoadingContainerRectangle
                {...args}
            />
        </div>
    </Theme>);
};

export const Rectangle = Template.bind({});

Rectangle.args = {
    children: "Loading Container Content",
    loading: true,
    loadingPlaceholder: "Loading Container Placeholder",
};
