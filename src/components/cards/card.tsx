import Icon_4 from '../../img/icon_4.svg';
import s from "./style.module.css";


export const Card = (props)=>{
    return (
        <div className={s.choice__card}>
            <div className={s.choice__card_head}>
                <div className={s.choice__card_head_logo}>
                    <img src={Icon_4} alt="icon"/>
                    <div>
                        Программирование
                    </div>
                </div>
                <div>
                    Для начинающих
                </div>
            </div>
            <div className={s.choice__card_img} style={
                {backgroundImage: `url(${props.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height:'178px',
                    width:'352px',
                }
            }>

            </div>
            <div className={s.choice__card_name}>
                {props.cardName}
            </div>
            <div className={s.choice__card_footer}>
                <div className={s.choice__card_footer_price}>
                    <div className={s.choice__card_footer_name}>
                        Цена
                    </div>
                    <div className={s.choice__card_footer_value}>
                        500 USDT
                    </div>
                </div>
                <div className={s.choice__card_footer_duration}>
                    <div className={s.choice__card_footer_name}>
                        Длительность
                    </div>
                    <div className={s.choice__card_footer_value}>
                        6 мес.
                    </div>
                </div>
                <div className={s.choice__card_footer_begin}>
                    <div className={s.choice__card_footer_name}>
                        Начало
                    </div>
                    <div className={s.choice__card_footer_value}>
                        06 Июля, 2024
                    </div>
                </div>
            </div>
        </div>
    )
}
