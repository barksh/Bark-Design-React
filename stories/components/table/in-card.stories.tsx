/**
 * @author WMXPY
 * @namespace Table
 * @description In Card
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Button, Card, Table, TableBody, TableData, TableHead, TableHeader, TableRow, Theme } from "../../../src";

export default {
    title: "Table",
    component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args: any) => {

    return (<Theme>
        <Card
            headerTitle="Table"
            noPadding
            size={args.size}
            maxWidth={512}
            actions={<Button>
                Action
            </Button>}
        >
            <Table
                {...args}
                fixedLayout
            >
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
        </Card>
        <div>
            No Table Header
        </div>
        <Card
            headerTitle="Table"
            noPadding
            size={args.size}
            maxWidth={512}
            actions={<Button>
                Action
            </Button>}
        >
            <Table
                {...args}
                fixedLayout
            >
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
        </Card>
    </Theme>);
};

export const InCard = Template.bind({});

InCard.args = {
    noOuterBorder: true,
};
