import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth as mockAxiosWithAuth } from "../helpers/axiosWithAuth";
import axios from "axios";

jest.mock("../helpers/axiosWithAuth")

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

// test("Renders BubblePage without errors", () => {
//   render(<BubblePage/>);
// });

test("Fetches data and renders the bubbles on mounting", async () => {
  mockAxiosWithAuth.mockResolvedValueOnce({ get: "hello"})
  
  console.log(await mockAxiosWithAuth())

  // jest.spyOn(mockAxiosWithAuth, "get").mockResolvedValueOnce({ data: colors });
  // axiosWithAuth().get = jest.fn().mockResolvedValueOnce({ data: colors });

  // These are ok
  render(<BubblePage />);

  // const bubble = await screen.findByText(/limegreen/i)
  // console.log(bubble);

  // expect(bubble).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading