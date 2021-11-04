import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { Search } from "../../components/Search";
import Providers from "../../providers";

describe("Input Component", () => {
  it("should be search CEP", async () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );

    const cepField = screen.getByPlaceholderText("Insira o CEP");

    const buttonElement = screen.getByText("Buscar pelo CEP");

    fireEvent.change(cepField, {
      target: { value: 65054310 },
    });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(cepField).toHaveValue(65054310);
    });
  });
});
