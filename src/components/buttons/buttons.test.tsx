import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GenericBigButton from "./genericBigButton";
import GenericMedButton from "./genericMedButton";

describe("GenericBigButton", () => {
  it("renders the button with the correct text", () => {
    const passedProp = "Start";
    render(<GenericBigButton text={passedProp} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(passedProp);
  });
});

describe("GenericMedButton", () => {
  it("renders the button with the correct text", () => {
    const passedProp = "SignOut";
    render(<GenericMedButton text={passedProp} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(passedProp);
  });
});
