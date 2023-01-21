import { useReducer } from "react";

function useCalculator(initValue) {
  /**
   * @description a reducer for React useReducer hook
   * @param {number} prev
   * @param {{ type: string, payload: any }} action
   * @returns {number}
   * @example dispatch({ type: "add", payload: 6 })
   */
  function reducer(prev, action) {
    const { type, payload } = action;

    switch (type) {
      case "add":
        return prev + payload;
      case "subtract":
        return prev - payload;
      case "multiply":
        return prev * payload;
      case "divide":
        return prev / payload;
      default:
        return prev;
    }
  }

  /**
   *
   * @param {number | string} value
   * @returns {number}
   */
  function initializer(value) {
    return isNaN(parseInt(value)) ? 0 : parseInt(value);
  }

  return useReducer(reducer, initValue, initializer);
}

export default useCalculator;
