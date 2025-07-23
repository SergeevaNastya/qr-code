import {GENERATE_DATA} from '../../constants'
import { QRCodeSVG } from 'qrcode.react';
import m from './GenerateHistory.module.css'

export const GenerateHistory = () => {

    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
    <div className={m.histContainer}>
        {data.map((text) => (
            <div key={text} className={m.histItem}>
                <span className={m.histText}>{text}</span>
                <div className={m.histQr}>
                    <QRCodeSVG value={text} size={100} />
                </div>
            </div>
        ))}
    </div>
    );
};