import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch } from "react-redux";
import Login from "./login";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Testing Login Coponent", () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  render(<Login />);

  it("Should render game logo", () => {
    const gameLogoText = screen.getByText("Whack-A");
    const gameLogoImage = screen.getByAltText("mole");
    const loginButton = screen.getByRole("button", {
      name: /login with google/i,
    });
    const loginDescription = screen.getByText(
      "Please Login with your Google Account to start playing."
    );

    expect(gameLogoText).toBeInTheDocument();
    expect(gameLogoImage).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(loginDescription).toBeInTheDocument();
  });
});
