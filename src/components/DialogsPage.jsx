import React from 'react'
import './DialogPage.css'
import ava from "../img/ava.png";
import avaSmile from "../img/avaSmile.png";

const DialogPage = () => {
    return <div className='dialogPage'>

        <div className='dialogsList'>
            <div className='dialogsTitle'>Dialogs</div>
            <ul className='dialogUsers'>
                <li>Maks</li>
                <li><b>Dima</b></li>
                <li>Anna</li>
                <li>Vital</li>
                <li>Svetlana</li>
                <li>Victor</li>
                <li>Alexander</li>
                <li>Valery</li>
                <li>Ludmila</li>
            </ul>
        </div>

        <div className='currentDialog'>
            <ul>
                <li className='message'>
                    <img className='dialogAva' src={ava}/>
                    <p className='userName'>Me</p>
                    <div className='messageBlock'>
                        <div className='angle'></div>
                        <p className='messageText'>Hello</p>
                    </div>
                </li>

                <li className='message'>
                    <img className='dialogAva' src={avaSmile}/>
                    <p className='userName'>Dima</p>
                    <div className='messageBlock'>
                        <div className='angle'></div>
                    <div className='messageText'>Универсальное свойство border позволяет одновременно установить толщину,
                        стиль и цвет границы вокруг элемента. Значения могут идти в любом порядке, разделяясь пробелом,
                        браузер сам определит, какое из них соответствует нужному свойству. Для установки границы только
                        на определенных сторонах элемента, воспользуйтесь свойствами border-top, border-bottom,
                        border-left, border-right.</div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
}

export default DialogPage;