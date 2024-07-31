import Percent from './img/percent.svg';
import User from './img/user.svg';
import Icon_1 from './img/icon_1.svg';
import Icon_2 from './img/icon_2.svg';
import Icon_3 from './img/icon_3.svg';
import FlagRu from './img/flag_ru.svg';
import Payton from './img/payton.svg';
import Js from './img/js.svg';
import s from './style.module.css';
import {Switch} from "./components/switch/switch";
import {ButtonShow} from "./components/buttons/button";
import {useState} from "react";
import {Card} from "./components/cards/card";
import {CardBlur} from "./components/cards/card_blur";

export const App = () =>{
    const [activeButton, setActiveButton] = useState('1');
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };
    return (
        <div className={s.main}>
            <header className={s.header}>
                <div className={s.logo}>
                </div>
                <nav className={s.menu}>
                    <ul>
                        <li className={s.menu_referral}>
                            <div>Referral</div>
                            <img src={Percent} alt=""/>
                        </li>
                        <li className={s.menu_user}>
                            <img src={User} alt="user"/>
                            <div>0x831...B49F</div>
                            <img src={Icon_1} alt="icon"/>
                        </li>
                        <li className={s.menu_switch}>
                            <Switch/>
                        </li>
                        <li className={s.menu_icon}>
                            <img src={Icon_2} alt="icon"/>
                        </li>
                        <li className={s.menu_icon}>
                            <img src={Icon_3} alt="icon"/>
                        </li>
                        <li className={s.menu_language}>
                            <img src={FlagRu} alt="flag"/>
                            <div>RU</div>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={s.container}>
                <section className={s.choice}>
                    <div className={s.choice__button}>
                        <ButtonShow
                            name="Курсы"
                            id="1"
                            active={activeButton === '1'}
                            onClick={handleButtonClick}
                        />
                        <ButtonShow
                            name="Моё обучение"
                            id="2"
                            active={activeButton === '2'}
                            onClick={handleButtonClick}
                        />
                    </div>
                    <div className={s.choice__content}>
                        <Card
                            img={Payton}
                            cardName="Web3 Python-разработчик"
                        />
                        <Card
                            img={Js}
                            cardName="Web3 JS-разработчик"
                        />
                        <CardBlur
                            cardName="Solidity"
                        />
                        <CardBlur
                            cardName="Building"
                        />

                    </div>
                </section>
            </div>
        </div>
    )
}