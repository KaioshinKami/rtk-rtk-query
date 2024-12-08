import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {setupStore} from "./store/store.ts";

const store=setupStore()

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)