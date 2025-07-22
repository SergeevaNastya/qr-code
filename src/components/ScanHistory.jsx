import {SCAN_DATA} from '../constants'
import {QRCodeSVG} from 'qrcode.react';

export const ScanHistory = () => {

    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    
        return (
        <div className='hist-container'>
            {data.map((text) => (
                <p key={text}>
                    {text}
                    <QRCodeSVG value={text}/>
                </p>
            ))}
        </div>
    );
}