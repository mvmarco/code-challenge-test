import { setupWorker } from "msw/browser";

import { allHandlers } from ".";

export const worker = setupWorker(...allHandlers);
