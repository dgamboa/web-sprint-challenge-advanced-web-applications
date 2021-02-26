import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  }
]

const getColorsMock = jest.fn();

test("Renders BubblePage without errors", () => {
  render(<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", () => {
  const { rerender } = render(<BubblePage/>);

  // There should be no colors on first render
  expect(screen.queryByText(/blueviolet/i)).toBeNull();

  // Re-render component with color data
  // rerender(<BubblePage/>);

  // Should now have colors


});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading