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
            {result !== '' && (
                <div>
                    <QRCodeSVG value={result} size={200} level="H" />
                </div> 
            )}
            <input
                type="text"
                value={value}
                placeholder="Введите текст..."
                onChange={onChangeHandler}
                className={s.input_qr}
            />
            <button type="button" className={s.button_qr} onClick={onClickHandler}>
                Сгенерировать QR
            </button>
        </div>
    );
}