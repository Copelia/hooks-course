import { act, renderHook } from "@testing-library/react";
import { useForm } from "../useForm";

describe("pruebas en use form", () => {
  const initialForm = {
    name: "cora",
    email: "cora@cora.com",
  };

  test("debe regresar valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    console.log(result.current);
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe cambiar el nombre del formulario", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toEqual(newValue);
  });
});
