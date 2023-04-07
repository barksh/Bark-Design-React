/**
 * @author WMXPY
 * @namespace Card
 * @description Complex
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { FaBoxOpen } from "react-icons/fa";
import { Card, Code, LoadingContainerBorder, Table, Tabs, Theme, useTabs } from "../../../src";

export default {
    title: "Card",
    component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args: any) => {

    const controller = useTabs();

    return (<Theme>
        <Card
            {...args}
            loadingProvider={LoadingContainerBorder}
            bodyPrefix={<FaBoxOpen
                size={40}
            />}
            bodySuffix={<div>Suffix</div>}
        >
            <Tabs
                controller={controller}
                noBorder
            >
                <Code
                    language="javascript"
                >
                    Code 1
                </Code>
                <Table
                    fixedLayout
                >
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </Table>
            </Tabs>
        </Card>
    </Theme>);
};

export const Complex = Template.bind({});

Complex.args = {
};
