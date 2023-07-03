import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../useCounter";

describe("pruebas en useCounter", () => {
  test("debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter } = result.current;
    expect(counter).toBe(10);
    //console.log(result);
  });

  test("debe generar el counter con valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test("debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;
    act(() => {
      increment();
    });
    expect(result.current.counter).toBe(11);
  });

  test("debe resetear el contador", () => {
    const { result } = renderHook(() => useCounter(10));
    const { counter, increment, reset } = result.current;
    act(() => {
      increment(1);
      reset();
    });
    expect(result.current.counter).toBe(10);
  });
});
