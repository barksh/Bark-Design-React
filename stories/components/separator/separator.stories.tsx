/**
 * @author WMXPY
 * @namespace Separator
 * @description Separator
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Separator, Theme } from "../../../src";

export default {
    title: "Separator",
    component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args: any) => {

    return (<Theme>
        <div>Horizontal</div>
        <div>
            <div>Before</div>
            <Separator
                {...args}
            />
            <div>After</div>
        </div>
        <div
        >Vertical</div>
        <div style={{
            display: 'flex',
        }}>
            <div>Before</div>
            <Separator
                {...args}
                direction="vertical"
            />
            <div>After</div>
        </div>
        <div>Horizontal With Margin</div>
        <div>
            <div>Before</div>
            <Separator
                {...args}
                direction="horizontal"
                withMargin
            />
            <div>After</div>
        </div>
        <div
        >Vertical With Margin</div>
        <div style={{
            display: 'flex',
        }}>
            <div>Before</div>
            <Separator
                {...args}
                direction="vertical"
                withMargin
            />
            <div>After</div>
        </div>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
