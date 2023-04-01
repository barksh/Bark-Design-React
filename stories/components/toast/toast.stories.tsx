/**
 * @author WMXPY
 * @namespace Toast
 * @description Toast
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { Button, Card, Theme, Toast, ToastProps } from "../../../src";

export default {
    title: "Toast",
    component: Toast,
    subcomponents: {
        Card,
    },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args: any) => {

    return (<Theme>
        <Button>Test</Button>
        <Toast
            {...args}
        >
            <Card
                width={256}
                headerTitle={"Hello World".repeat(10)}
            >
                Hello World
            </Card>
        </Toast>
        <Toast
            {...args}
        >
            <Card
                headerTitle="Hello World"
            >
                Hello World
            </Card>
        </Toast>
    </Theme>);
};

export const Primary: ComponentStory<React.FC<ToastProps>> = Template.bind({});

Primary.args = {
    position: 'bottom-right',
};
