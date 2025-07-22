import {GENERATE_DATA} from '../constants'
import { QRCodeSVG } from 'qrcode.react';

export const GenerateHistory = () => {

    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

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
};