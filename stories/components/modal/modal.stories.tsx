/**
 * @author WMXPY
 * @namespace Modal
 * @description Modal
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { Button, Card, Modal, ModalProps, Theme } from "../../../src";

export default {
    title: "Modal",
    component: Modal,
    subcomponents: {
        Card,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: any) => {

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

export const Primary: ComponentStory<React.FC<ModalProps>> = Template.bind({});

Primary.args = {
};