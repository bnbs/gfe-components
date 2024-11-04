import React from "react";
import { render, screen } from "@testing-library/react";

import Badge, { BadgeProps } from "./Badge";

const defaultProps: BadgeProps = {
  children: "This is a Badge",
  color: "neutral",
  size: "sm",
};

describe("Badge", () => {
  test.each(["sm", "md", "lg"] as BadgeProps["size"][])(
    "renders the Badge with size equal to %s",
    (size) => {
      const component = render(<Badge {...defaultProps} size={size} />);
      expect(component).toMatchSnapshot();
    }
  );

  test.each([
    "neutral",
    "error",
    "warning",
    "success",
    "brand",
  ] as BadgeProps["color"][])(
    "renders the Badge with color equal to %s",
    (color) => {
      const component = render(<Badge {...defaultProps} color={color} />);
      expect(component).toMatchSnapshot();
    }
  );

  test("renders the Badge with children equal to a react element", () => {
    const text = "This is a react element";
    render(
      <Badge {...defaultProps}>
        <div>{text}</div>
      </Badge>
    );

    expect(screen.getByText(text)).toBeDefined();
  });
});
