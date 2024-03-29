/**
 * @author WMXPY
 * @namespace LoadingContainerBorder
 * @description Loading Container Border
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { LoadingContainerBorder, Theme } from "../../../src";

export default {
    title: "Loading Container",
    component: LoadingContainerBorder,
} as Meta<typeof LoadingContainerBorder>;

const Template: StoryFn<typeof LoadingContainerBorder> = (args: any) => {

    return (<Theme>
        <div style={{
            width: '256px',
            height: '256px',
            border: '1px solid black',
        }}>
            <LoadingContainerBorder
                {...args}
            />
        </div>
        <div style={{
            width: '256px',
            height: '128px',
            border: '1px solid black',
        }}>
            <LoadingContainerBorder
                {...args}
            />
        </div>
    </Theme>);
};

export const Border = Template.bind({});

Border.args = {
    children: "Loading Container Content",
    loading: true,
    loadingPlaceholder: "Loading Container Placeholder",
};
