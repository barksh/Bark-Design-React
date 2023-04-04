/**
 * @author WMXPY
 * @namespace Modal
 * @description Modal
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Button, Card, Modal, ModalProps, Theme } from "../../../src";

export default {
    title: "Modal",
    component: Modal,
    subcomponents: {
        Card,
    },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args: any) => {

    return (<Theme>
        <Button>Test</Button>
        <Modal
            {...args}
        >
            <Card
                headerTitle="Hello World"
            >
                Hello World
            </Card>
        </Modal>
    </Theme>);
};

export const Primary: StoryFn<React.FC<ModalProps>> = Template.bind({});

Primary.args = {
};
