import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import LoadingInicial from './components/loading';
const App = lazy(()=> import('./App'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<LoadingInicial/>} >
        <App />
    </Suspense>
);

serviceWorkerRegistration.register();

reportWebVitals();