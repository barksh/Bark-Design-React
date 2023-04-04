/**
 * @author WMXPY
 * @namespace Toast
 * @description Timed
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Button, Card, Theme, Toast, ToastProps, useTimedActive } from "../../../src";

export default {
    title: "Toast",
    component: Toast,
    subcomponents: {
        Card,
    },
} as Meta<typeof Toast>;

const Template: StoryFn<typeof Toast> = (args: any) => {

    const active = useTimedActive();

    return (<Theme>
        <Button
            onClick={() => {
                active.open(1000);
            }}
        >Open for 1000ms</Button>
        <Toast
            {...args}
            active={active.active}
        >
            <Card
                width={256}
                headerTitle={"Hello World"}
            >
                Hello World
            </Card>
        </Toast>
    </Theme>);
};

export const Timed: StoryFn<React.FC<ToastProps>> = Template.bind({});

Timed.args = {
    position: 'bottom-right',
};
