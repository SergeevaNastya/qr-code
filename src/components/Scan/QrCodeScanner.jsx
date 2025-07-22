import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import n from './QrCodeScanner.module.css';
import {SCAN_DATA} from '../../constants';

export const QrCodeScanner = () => {

    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        localStorage.setItem(SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue]));
    };

    const settings = {
        audio: false,
        finder: false
    };

    return (
        <div className={n.container}>
            <Scanner
            onScan={scanHandler}
            components={settings}
            styles={
                {container: {width: 200}}
            }/>
            <p className={n.scan-result}>{scanned}</p>
        </div>
    );
};