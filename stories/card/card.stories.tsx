/**
 * @author WMXPY
 * @namespace Card
 * @description Card
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card, Theme } from "../../src";
import { FaBoxOpen } from "react-icons/fa";

export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: any) => {

    return (<Theme>
        <Card
            {...args}
        />
        <div>
            With Prefix
        </div>
        <Card
            {...args}
            bodyPrefix={<div>Prefix</div>}
        />
        <div>
            With Suffix
        </div>
        <Card
            {...args}
            bodySuffix={<div>Suffix</div>}
        />
        <div>
            With Prefix and Suffix
        </div>
        <Card
            {...args}
            bodyPrefix={<FaBoxOpen
                size={40}
            />}
            bodySuffix={<div>Suffix</div>}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    bodyTitle: "Card Title",
    children: "Card Content",
};
