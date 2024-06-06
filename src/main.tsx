import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/group-ui/assets/themes/vwgroup/vwgroup.css'
import { defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/components';
void defineCustomElements();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
