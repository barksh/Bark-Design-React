/**
 * @author WMXPY
 * @namespace Menu
 * @description Menu
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { FaBaseballBall } from "react-icons/fa";
import { Menu, MenuItem, Theme } from "../../../src";

export default {
    title: "Menu",
    component: Menu,
    subcomponents: {
        MenuItem,
    }
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args: any) => {

    return (<Theme>
        <Menu
            {...args}
        >
            <MenuItem
                title="Menu Item 1"
                description="Menu Item 1 Description"
                prefix={<FaBaseballBall
                    size={24}
                />}
            />
            <MenuItem
                title="Menu Item 2"
            >
                <MenuItem
                    title="Menu Item 2.1"
                    description="Menu Item 2.1 Description"
                    prefix={<FaBaseballBall
                        size={24}
                    />}
                    suffix={<FaBaseballBall
                        size={24}
                    />}
                    onClick={() => {
                        alert('click');
                    }}
                >
                    <MenuItem
                        title="Menu Item 2.1.1"
                    />
                    <MenuItem
                        title="Menu Item 2.1.2"
                        description="Menu Item 2.1.2 Description"
                        onClick={() => {
                            alert('click');
                        }}
                    />
                </MenuItem>
                <MenuItem
                    title="Menu Item 2.2"
                    description="Menu Item 2.2 Description"
                    prefix={<FaBaseballBall
                        size={24}
                    />}
                    suffix={<FaBaseballBall
                        size={24}
                    />}
                />
            </MenuItem>
            <MenuItem
                title="Menu Item 3"
                suffix={<FaBaseballBall
                    size={24}
                />}
            />
        </Menu>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Menu Content",
};
