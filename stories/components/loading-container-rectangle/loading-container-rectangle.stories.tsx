/**
 * @author WMXPY
 * @namespace LoadingContainerRectangle
 * @description Loading Container Rectangle
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { LoadingContainerRectangle, Theme } from "../../../src";

export default {
    title: "Loading Container",
    component: LoadingContainerRectangle,
} as Meta<typeof LoadingContainerRectangle>;

const Template: StoryFn<typeof LoadingContainerRectangle> = (args: any) => {

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
