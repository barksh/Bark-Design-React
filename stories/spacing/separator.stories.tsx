/**
 * @author WMXPY
 * @namespace Spacing
 * @description Spacing
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spacing, Theme } from "../../src";

export default {
    title: "Spacing",
    component: Spacing,
} as ComponentMeta<typeof Spacing>;

const Template: ComponentStory<typeof Spacing> = (args: any) => {

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
