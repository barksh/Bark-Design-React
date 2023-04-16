/**
 * @author WMXPY
 * @namespace Callout
 * @description With Table
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Button, Callout, Table, TableBody, TableData, TableHead, TableHeader, TableRow, Theme } from "../../../src";

export default {
    title: "Callout",
    component: Callout,
} as Meta<typeof Callout>;

const Template: StoryFn<typeof Callout> = (args: any) => {

    return (<Theme>
        <Callout
            {...args}
            title="Title"
            maximizeWidth
            contentPadding
            actions={<Button>Action</Button>}
            prefix={<div>Prefix</div>}
            suffix={<div>Suffix</div>}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>First Name</TableHeader>
                        <TableHeader>Last Name</TableHeader>
                        <TableHeader>Age</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableData>John</TableData>
                        <TableData>Doe</TableData>
                        <TableData>50</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Mary</TableData>
                        <TableData>Moe</TableData>
                        <TableData>94</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>July</TableData>
                        <TableData>Dooley</TableData>
                        <TableData>72</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Callout>
    </Theme>);
};

export const WithTable = Template.bind({});

WithTable.args = {
};
