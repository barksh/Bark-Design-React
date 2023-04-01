/**
 * @author WMXPY
 * @namespace Callout
 * @description Callout
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonGroup, Callout, Theme } from "../../src";

export default {
    title: "Callout",
    component: Callout,
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args: any) => {

    return (<Theme>
        <div>Basic</div>
        <Callout
            {...args}
        />
        <div>With Only Title</div>
        <Callout
            {...args}
            title="Title"
            // eslint-disable-next-line react/no-children-prop
            children={undefined}
        />
        <div>With Title</div>
        <Callout
            {...args}
            title="Title"
        />
        <div>With Actions</div>
        <Callout
            {...args}
            actions={<ButtonGroup>
                <Button>Action 1</Button>
                <Button>Action 2</Button>
            </ButtonGroup>}
        />
        <div>With Prefix</div>
        <Callout
            {...args}
            prefix={<div>Prefix</div>}
        />
        <div>With Prefix and Title</div>
        <Callout
            {...args}
            title="Title"
            prefix={<div>Prefix</div>}
        />
        <div>With Suffix</div>
        <Callout
            {...args}
            suffix={<div>Suffix</div>}
        />
        <div>With Suffix and Title</div>
        <Callout
            {...args}
            title="Title"
            suffix={<div>Suffix</div>}
        />
        <div>With Title, Actions, Prefix, Suffix</div>
        <Callout
            {...args}
            title="Title"
            actions={<Button>Action</Button>}
            prefix={<div>Prefix</div>}
            suffix={<div>Suffix</div>}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
