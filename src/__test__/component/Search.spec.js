import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import Search from "../../components/Search";

import MockAdapter from "axios-mock-adapter";
import api from "../../services";

const apiMock = new MockAdapter(api);

describe("Input Component", () => {
  it("should be search CEP", async () => {
    apiMock.onGet(65054310).replyOnce(200, {});
    render(<Search />);

    const cepField = screen.getByPlaceholderText("Insira o CEP");

    const buttonElement = screen.getByText("Buscar pelo CEP");

    fireEvent.change(cepField, {
      target: { value: 65054310 },
    });

    fireEvent.click(buttonElement);

    // await waitFor(() => {
    //   expect(screen.getByText(/Logradouro/)).toBeInTheDocument();
    //   expect(screen.getByText(/Cohatrac II/)).toBeInTheDocument();
    // });
  });
});
