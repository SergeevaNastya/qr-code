import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { GenerateHistory } from './components/History/GenerateHistory';
import { Navigation } from './components/Navigation/Navigation';
import { Routes, Route } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/qr-code/generate" element={<QrCodeGenerator />}/>
                <Route path="/qr-code/generateHistory" element={<GenerateHistory />}/>
            </Routes>
        </div> 
    );
}