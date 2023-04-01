/**
 * @author WMXPY
 * @namespace Table
 * @description In Card
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Card, Table, Theme } from "../../src";

export default {
    title: "Table",
    component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: any) => {

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
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>John</td>
                        <td>Doe</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>72</td>
                    </tr>
                </tbody>
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
                <tbody>
                    <tr>

                        <td>John</td>
                        <td>Doe</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>72</td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    </Theme>);
};

export const InCard = Template.bind({});

InCard.args = {
    noOuterBorder: true,
};
