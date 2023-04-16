/**
 * @author WMXPY
 * @namespace Card
 * @description Complex
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { FaBoxOpen } from "react-icons/fa";
import { Card, Code, LoadingContainerBorder, Tab, Table, TableBody, TableData, TableRow, Tabs, Theme, useTabs } from "../../../src";

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
            headerTitle="Card"
            bodySuffix={<div>Suffix</div>}
        >
            <Tabs
                controller={controller}
                noHeaderBottomMargin
                balancedBorder
            >
                <Tab
                    title="Tab 1"
                >
                    <Code
                        language="javascript"
                        noBorder
                        noMargin
                    >
                        Code 1
                    </Code>
                    <Table
                        fixedLayout
                        noOuterBorder
                    >
                        <TableBody>
                            <TableRow>
                                <TableData>1</TableData>
                                <TableData>2</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>3</TableData>
                                <TableData>4</TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Tab>
                <Tab
                    title="Tab 2"
                >
                    <Code
                        language="javascript"
                        noBorder
                        noMargin
                    >
                        Code 2
                    </Code>
                    <Table
                        fixedLayout
                        noOuterBorder
                    >
                        <TableBody>
                            <TableRow>
                                <TableData>2</TableData>
                                <TableData>3</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>4</TableData>
                                <TableData>5</TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Tab>
            </Tabs>
        </Card>
    </Theme>);
};

export const Complex = Template.bind({});

Complex.args = {
};
