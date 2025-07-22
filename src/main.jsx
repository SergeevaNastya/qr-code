import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { Layout } from './Layout';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Layout/>
  </BrowserRouter>
)
