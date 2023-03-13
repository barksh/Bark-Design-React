/**
 * @author WMXPY
 * @namespace ButtonGroup
 * @description Button Group
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonGroup, Theme } from "../../src";

export default {
  title: "Button Group",
  component: ButtonGroup,
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args: any) => {

  return (
    <Theme>
      <ButtonGroup
        {...args}
      />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};
