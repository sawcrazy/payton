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
        </div>
    )
}