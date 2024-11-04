import { Meta, StoryObj } from "@storybook/react/*";

import Badge from "./Badge";

const meta = {
  component: Badge,
  title: "Badge",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "test",
    color: "neutral",
    size: "sm",
  },
};
