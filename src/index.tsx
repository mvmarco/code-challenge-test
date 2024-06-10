import { Provider as ReduxProvider } from "react-redux";
import ReactDOM, { Container } from "react-dom/client";

import store from "./redux/store";
import { App } from "./App";

async function enableMocking() {
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/mocks');
    return worker.start();
  }
}

const rootDiv = document.getElementById("root") as Container;
  const root = ReactDOM.createRoot(rootDiv);

  void enableMocking().then(() => {
    root.render(
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    );
  });

