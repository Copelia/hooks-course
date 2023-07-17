import { MultipleCustomHooks } from "../../MultipleCustomHooks";
import { fireEvent, render, screen } from "@testing-library/react";
import { useFetch } from "../../Hooks/useFetch";
import { useCounter } from "../../Hooks/useCounter";

jest.mock("../../Hooks/useFetch");
jest.mock("../../Hooks/useCounter");

describe("pruebas en multiple custm hooks", () => {

  const mockIncrement= jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test("debe retornar valores por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeTruthy();
    //  screen.debug();
  });

  test("debe mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Coral", quote: "whatda" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    // screen.debug();
    expect(screen.getByText("whatda")).toBeTruthy();
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("debe llamar a la función de incrementar", () => {

    useFetch.mockReturnValue({
      data: [{ author: "Coral", quote: "whatda" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
