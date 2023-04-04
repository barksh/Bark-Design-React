/**
 * @author WMXPY
 * @namespace LeadingDynamic
 * @description Leading Dynamic
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { FaMap } from "react-icons/fa";
import { LeadingDynamic, Theme } from "../../../src";

export default {
    title: "Leading",
    component: LeadingDynamic,
} as Meta<typeof LeadingDynamic>;

const Template: StoryFn<typeof LeadingDynamic> = (args: any) => {

    return (<Theme>
        <LeadingDynamic
            {...args}
        >
            <FaMap
                size={24}
            />
        </LeadingDynamic>
    </Theme>);
};

export const Dynamic = Template.bind({});

Dynamic.args = {
};
