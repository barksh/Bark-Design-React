/**
 * @author WMXPY
 * @namespace ButtonGroup
 * @description Button Group
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonGroup, Theme } from "../../src";

export default {
  title: "Button Group",
  component: ButtonGroup,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['regular', 'small', 'large'],
      },
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args: any) => {

  return (
    <Theme>
      <ButtonGroup
        {...args}
      >
        <Button
          size={args.size}
          description="This is Button 1"
        >
          Button 1
        </Button>
        <Button
          size={args.size}
        >
          Button 2
        </Button>
        <Button
          size={args.size}
        >
          Button 3
        </Button>
      </ButtonGroup>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
  size: "regular",
} as any;
