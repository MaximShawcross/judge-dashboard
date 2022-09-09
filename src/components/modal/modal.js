import { useState } from 'react';
import { setModal } from '../../utils/modal';

import './modal.scss'

const Modal = ({modalStyle, setModalStyle}) => {

    return (
        <div className = {modalStyle ? "modal modal_show" : "modal"}>
            <div className="modal__header">Создать дело</div>
            <div className="modal__content">
                <div className="modal__content__left">
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">УИД</div>
                        <input className="modal__content__item__input" placeholder="31MS0041-01-2021-000604-52"></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Номер</div>
                        <input className="modal__content__item__input" placeholder="2-493/2021"></input>
                    </div>

                <div className="modal__content__complainant">
                    <div className="modal__content__item">
                        <h3 className="modal__content__item__text modal__content__item__text_title">Истец:</h3>
                        <div className="modal__content__item__wrapper">
                            <input className = "modal__content__item__wrapper__checkbox" type = "checkbox"></input>
                            <div className="modal__content__item__text">Юридическое лицо</div>
                        </div>                        
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Фамилия</div>
                        <input className="modal__content__item__input" placeholder="Иванова"></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Имя</div>
                        <input className="modal__content__item__input" placeholder="Марина"></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Отчество</div>
                        <input className="modal__content__item__input" placeholder="Ивановна"></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Дата рождения</div>
                        <input className="modal__content__item__input" placeholder="2-493/2021"></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Адрес регистрации</div>
                        <input className="modal__content__item__input" placeholder="2-493/2021"></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Адрес проживания</div>
                        <input className="modal__content__item__input" placeholder="2-493/2021"></input>
                    </div> 
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Номер телефона</div>
                        <input className="modal__content__item__input" placeholder="2-493/2021"></input>
                    </div>

                </div>
            </div>
            <div className="modal__content__right">
                <div className="modal__content__item">
                    <div className="modal__content__item__text modal__content__item__text_title">Дата:</div>
                    <input className="modal__content__item__input" placeholder="31MS0041-01-2021-000604-52"></input>
                </div>
                

                
                <div className="modal__content__respondent">
                    <div className="modal__content__item">
                        <h3 className="modal__content__item__text modal__content__item__text_title">Ответчик:</h3>
                        <div className="modal__content__item__wrapper">
                            <input className = "modal__content__item__wrapper__checkbox" type = "checkbox"></input>
                            <div className="modal__content__item__text">Юридическое лицо</div>
                        </div>                        
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">ИНН</div>
                        <input className="modal__content__item__input" placeholder="123400"></input>
                    </div> 
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">ОГРН</div>
                        <input className="modal__content__item__input" placeholder="123400"></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Название компании</div>
                        <input className="modal__content__item__input" placeholder="Название компании"></input>
                    </div> 
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Юридический адрес</div>
                        <input className="modal__content__item__input" placeholder="г. Белгород, ул. Радости,  5-21"></input>
                    </div>
                    <div className="modal__content__item">
                        <h3 className="modal__content__item__text modal__content__item__text_title"></h3>
                        <div className="modal__content__item__wrapper">
                            <input className = "modal__content__item__wrapper__checkbox" type = "checkbox"></input>
                            <div className="modal__content__item__text">Юридическое лицо</div>
                        </div>                        
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Почтовый адрес</div>
                        <input className="modal__content__item__input" placeholder="г. Белгород, ул. Радости,  5-21"></input>
                    </div> 
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">КПП</div>
                        <input className="modal__content__item__input" placeholder="000000000"></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Р/c</div>
                        <input className="modal__content__item__input" placeholder="10318810007009063768"></input>
                    </div> 
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Банк</div>
                        <input className="modal__content__item__input" placeholder="БЕЛГОРОДСКОЕ ОТДЕЛЕНИЕ N8..."></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">Бик</div>
                        <input className="modal__content__item__input" placeholder="0890009083"></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text">К/c</div>
                        <input className="modal__content__item__input" placeholder="10318810007009063768"></input>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__content__item__text"></div>
                        <div className="modal__content__item__btns">
                            <button onClick = {() => { setModalStyle(false)}} className="modal__content__item__btns__back">Отмена</button>
                            <button className="modal__content__item__btns__create">Создать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        </div>
    )
}

export default Modal;