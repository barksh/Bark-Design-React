/**
 * @author WMXPY
 * @namespace SpinnerRectangle
 * @description Spinner Rectangle
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { SpinnerRectangle, Theme } from "../../../src";

export default {
    title: "Spinner Rectangle",
    component: SpinnerRectangle,
} as Meta<typeof SpinnerRectangle>;

const Template: StoryFn<typeof SpinnerRectangle> = (args: any) => {

    return (<Theme>
        <SpinnerRectangle
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
