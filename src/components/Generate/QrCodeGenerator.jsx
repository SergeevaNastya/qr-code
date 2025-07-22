import {QRCodeSVG} from 'qrcode.react';
import {useState} from 'react'
import s from './QrCodeGenerator.module.css';
import {GENERATE_DATA} from '../../constants';

export const QrCodeGenerator = () => {

    const [value, setValue] = useState(''); // хранит текущий текст, который пользователь вводит 
    const [result, setResult] = useState(''); // хранит текст, для которого нужно сгенерировать код

    const onClickHandler = () => { 
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(GENERATE_DATA,
            JSON.stringify([...prevData, value]));
        setResult(value); // сохраняет текущий текст как результат
        setValue(''); // сброс кода
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value); // обновляет value текущим текстом из input
        setResult(''); // сброс кода
    };

    return (
        <div className={s.container}>
            {result != '' && (
                <QRCodeSVG value={result}/>
            )} 
            <input className={s.input_qr} placeholder="Введите текст" type="text" value={value} onChange={onChangeHandler}/>
            <button className={s.button_qr} type="button" onClick={onClickHandler}>Сгенерировать QR</button>
        </div>
    );
}