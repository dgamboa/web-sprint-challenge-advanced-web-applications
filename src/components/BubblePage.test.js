import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors as mockFetchColors } from "../api/fetchColors";

jest.mock("../api/fetchColors")

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

test("Renders BubblePage without errors", () => {
  mockFetchColors.mockResolvedValueOnce({ data: colors })
  render(<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  mockFetchColors.mockResolvedValueOnce({ data: colors })

  render(<BubblePage />);

  const bubble = await screen.findByText(/limegreen/i)
  expect(bubble).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading