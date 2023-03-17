/**
 * @author WMXPY
 * @namespace Card
 * @description Card With Header
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaBoxOpen, FaTimes } from "react-icons/fa";
import { Button, ButtonGroup, Card, Theme } from "../../src";

export default {
    title: "Card",
    component: Card,
    subcomponents: {
        Button,
        ButtonGroup,
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: any) => {

    return (<Theme>
        <Card
            {...args}
            headerTitle="Header Title"
        />
        <div>
            With Prefix Only
        </div>
        <Card
            {...args}
            headerPrefix={<FaBoxOpen
                size={24}
            />}
        />
        <div>
            With Suffix Only
        </div>
        <Card
            {...args}
            headerSuffix={<Button>
                <FaTimes
                    size={24}
                />
            </Button>}
        />
        <div>
            With Prefix and Title
        </div>
        <Card
            {...args}
            headerTitle="Header Title"
            headerPrefix="Prefix"
        />
        <div>
            With Suffix and Title
        </div>
        <Card
            {...args}
            headerTitle="Header Title"
            headerSuffix="Suffix"
        />
        <div>
            With Prefix and Suffix Only
        </div>
        <Card
            {...args}
            headerPrefix={<Button>
                <FaBoxOpen
                    size={24}
                />
            </Button>}
            headerSuffix={<Button>
                <FaTimes
                    size={24}
                />
            </Button>}
        />
        <div>
            With All
        </div>
        <Card
            {...args}
            headerTitle="Header Title"
            headerPrefix={<FaBoxOpen
                size={24}
            />}
            headerSuffix={<ButtonGroup>
                <Button>
                    Button 1
                </Button>
                <Button>
                    <FaTimes
                        size={24}
                    />
                </Button>
            </ButtonGroup>}
        />
        <div>
            With Actions
        </div>
        <Card
            {...args}
            headerTitle="Header Title"
            headerPrefix="Prefix"
            headerSuffix={<Button>
                <FaTimes
                    size={24}
                />
            </Button>}
            actions={<ButtonGroup>
                <Button>
                    Button 1
                </Button>
                <Button>
                    Button 2
                </Button>
            </ButtonGroup>}
        />
    </Theme>);
};

export const WithHeader = Template.bind({});

WithHeader.args = {
    bodyTitle: "Card Title",
    children: "Card Content",
};
