import { Provider as ReduxProvider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import store from './redux/store';
import { App } from './App';
import { worker } from './mocks/mocks';

async function enableMocking() {
  const serviceWorkerUrl = `${process.env.PUBLIC_URL}/mockServiceWorker.js`;
  return worker.start({
    serviceWorker: {
      url: serviceWorkerUrl,
      options: {
        scope: process.env.PUBLIC_URL,
      },
    },
    onUnhandledRequest: 'bypass',
  });
}

const rootDiv = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootDiv);

enableMocking()
  .then(() => {
    root.render(
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    );
  })
  .catch((error) => {
    console.error('Failed to start mock service worker:', error);
    root.render(
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    );
  });
