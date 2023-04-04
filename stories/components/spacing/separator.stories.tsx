/**
 * @author WMXPY
 * @namespace Spacing
 * @description Spacing
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Spacing, Theme } from "../../../src";

export default {
    title: "Spacing",
    component: Spacing,
} as Meta<typeof Spacing>;

const Template: StoryFn<typeof Spacing> = (args: any) => {

    return (<Theme>
        <div>Horizontal</div>
        <div>
            <div>Before</div>
            <Spacing
                {...args}
                direction="horizontal"
            />
            <div>After</div>
        </div>
        <div
        >Vertical</div>
        <div style={{
            display: 'flex',
        }}>
            <div>Before</div>
            <Spacing
                {...args}
                direction="vertical"
            />
            <div>After</div>
        </div>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
