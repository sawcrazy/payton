import s from "./style.module.css";

export const CardBlur = (props)=>{
    return (
        <div className={s.choice__card__blur}>
            <div className={s.choice__card_head} >
                <div className={s.choice__card_head_block_1}></div>
                <div className={s.choice__card_head_block_2}></div>
            </div>
            <div className={s.choice__content}>
                <div className={s.choice__text}>
                    Скоро
                </div>

            </div>
            <div className={s.choice__card_name}>
                {props.cardName}
            </div>
            <div className={s.choice__card_footer}>

            </div>
        </div>
    )
}