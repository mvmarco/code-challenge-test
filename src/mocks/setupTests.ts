// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "regenerator-runtime/runtime";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "isomorphic-fetch";

import { setupServer } from "msw/node";

import { allHandlers } from ".";

process.env = Object.assign(process.env, {
  API_URL: "http://localhost:3000/api",
});

export const server = setupServer(...allHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
