import { createRoot } from 'react-dom/client'
import './index.css'
import './shared/styles/index.scss';
import '@/app/i18n/i18n.ts';
import App from './App.tsx'
import StoreProvider from './app/providers/StoreProvider.tsx';


const appContainer = document.getElementById('root')
if (!appContainer) {
  throw new Error("The app is not found!");
}

createRoot(appContainer).render(
  <StoreProvider>
    <App />
  </StoreProvider>
)