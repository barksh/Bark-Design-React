/**
 * @author WMXPY
 * @namespace Button
 * @description Button
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Theme } from "../src";

export default {
  title: "Button",
  component: Button,
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => {

  return (
    <Theme>
      <Button
        {...args}
      />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};
