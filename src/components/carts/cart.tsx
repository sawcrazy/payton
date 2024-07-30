import Icon_4 from '../../img/icon_4.svg';
import Payton from '../../img/payton.svg'
import s from "./style.module.css";


export const Cart = ()=>{
    return (
        <div className={s.choice__cart}>
            <div className={s.choice__cart_head}>
                <div className={s.choice__cart_head_logo}>
                    <img src={Icon_4} alt="icon"/>
                    <div>
                        Программирование
                    </div>
                </div>
                <div>
                    Для начинающих
                </div>
            </div>
            <div className={s.choice__cart_img} style={
                {backgroundImage: `url(${Payton})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height:'178px',
                    width:'352px',
                }
            }>

            </div>
            <div className={s.choice__cart_name}>
                Web3 Python-разработчик
            </div>
            <div className={s.choice__cart_footer}>
                <div>
                    <div className={s.choice__cart_footer_name}>
                        Цена
                    </div>
                    <div className={s.choice__cart_footer_value}>
                        500 USDT
                    </div>
                </div>
                <div>
                    <div className={s.choice__cart_footer_name}>
                        Длительность
                    </div>
                    <div className={s.choice__cart_footer_value}>
                        6 мес.
                    </div>
                </div>
                <div>
                    <div className={s.choice__cart_footer_name}>
                        Начало
                    </div>
                    <div className={s.choice__cart_footer_value}>
                        06 Июля, 2024
                    </div>
                </div>
            </div>
        </div>
    )
}
