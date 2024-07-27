import s from './style.module.css';

export const App = () =>{
    return (
        <div className={s.main}>
            <header className={s.header}>
                <div className={s.logo}>
                    <span>
                        All-in-one
                    </span>
                    <span>
                        Study
                    </span>
                </div>
                <nav className={s.menu}>
                    <ul>
                        <li>Referral</li>
                        <li> пользователь</li>
                        <li> 
                            <label className={s.switch}>
                                <input type="checkbox"/>
                                <span className={s.slider + ' ' + s.round}></span>
                            </label>
                        </li>
                        <li> чат </li>
                        <li> уведомления</li>
                        <li> язык</li>
                    </ul>
                </nav>
            </header>
            <div className={s.container}>
                <section className={s.choice}>
                    <div className={s.choice__button}>
                        <div>
                            Курсы
                        </div>
                        <div>
                            Моё обучение
                        </div>
                    </div>
                    <div className={s.choice__content}>
                        <div className={s.choice__cart}>
                            <div className={s.choice__cart_head}>
                                <div>
                                    Программирование
                                </div>
                                <div>
                                    Для начинающих
                                </div>
                            </div>
                            <div className={s.choice__cart_img}>

                            </div>
                            <div>
                                Web3 Python-разработчик
                            </div>
                            <div className={s.choice__cart_footer}>
                                <div>
                                    Цена
                                    500 USDT
                                </div>
                                <div>
                                    Длительность
                                    6 мес.
                                </div>
                                <div>
                                    Начало
                                    06 Июля, 2024
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}