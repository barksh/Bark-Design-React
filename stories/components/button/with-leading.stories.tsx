/**
 * @author WMXPY
 * @namespace Button
 * @description With Leading
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { FaAngleRight, FaBaseballBall } from "react-icons/fa";
import { Button, LeadingDynamic, Theme } from "../../../src";

export default {
    title: "Button",
    component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: any) => {

    const [loading, setLoading] = useState<boolean>(false);

    return (<Theme>
        <div>
            With Prefix
        </div>
        <Button
            {...args}
            onClick={() => setLoading(!loading)}
            noPrefixPadding={true}
            prefix={<LeadingDynamic
                size={args.size}
                noBorder={true}
                loading={loading}
            >
                <FaBaseballBall
                    size={24}
                />
            </LeadingDynamic>}
        />
        <div>
            With Suffix
        </div>
        <Button
            {...args}
            onClick={() => setLoading(!loading)}
            noSuffixPadding={true}
            suffix={<LeadingDynamic
                size={args.size}
                noBorder={true}
                loading={loading}
            >
                <FaBaseballBall
                    size={24}
                />
            </LeadingDynamic>}
        />
        <div>
            With Prefix and Suffix
        </div>
        <Button
            {...args}
            onClick={() => setLoading(!loading)}
            noPrefixPadding={true}
            noSuffixPadding={true}
            prefix={<LeadingDynamic
                size={args.size}
                noBorder={true}
                loading={loading}
            >
                <FaBaseballBall
                    size={24}
                />
            </LeadingDynamic>}
            suffix={<LeadingDynamic
                size={args.size}
                noBorder={true}
                loading={loading}
            >
                <FaAngleRight
                    size={30}
                />
            </LeadingDynamic>}
        />
    </Theme>);
};

export const WithLeading = Template.bind({});

WithLeading.args = {
    children: "Button",
    description: "I am a button",
};
