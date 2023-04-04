/**
 * @author WMXPY
 * @namespace Code
 * @description In Card
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Button, Card, Code, Theme } from "../../../src";

export default {
    title: "Code",
    component: Code,
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = (args: any) => {

    console.log(args);

    return (<Theme>
        <Card
            headerTitle="Code"
            noPadding
        >
            <Code
                {...args}
            />
        </Card>
        <div>Copyable</div>
        <Card
            headerTitle="Code"
            noPadding
        >
            <Code
                {...args}
                copyButton="Copy"
            />
        </Card>
        <div>With Body and Action</div>
        <Card
            headerTitle="Code"
            bodyTitle="Body"
            noPadding
            actions={<Button>
                Button 1
            </Button>}
        >
            <Code
                {...args}
                copyButton="Copy"
            />
        </Card>
    </Theme>);
};

export const InCard = Template.bind({});

InCard.args = {
    language: "raw",
    wrap: true,
    break: false,
    noBorder: true,
    noPadding: false,
    noMargin: true,
    children: "Content ".repeat(100),
};
