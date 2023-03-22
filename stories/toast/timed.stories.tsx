/**
 * @author WMXPY
 * @namespace Toast
 * @description Timed
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { Button, Card, Theme, Toast, ToastProps, useTimedActive } from "../../src";

export default {
    title: "Toast",
    component: Toast,
    subcomponents: {
        Card,
    },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args: any) => {

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

export const Timed: ComponentStory<React.FC<ToastProps>> = Template.bind({});

Timed.args = {
    position: 'bottom-right',
};
