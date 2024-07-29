import './style.css';
export const ButtonShow = (props) =>{
    return (
        <div className={props.active ? 'button_show active' : 'button_show'}
                onClick={()=> props.onClick(props.id)}
        >
            {props.name}
        </div>
    )
}