import './Button.css'

const Button = ({onClickEvent, title}) => (
    <div className="button-container">
        <button onClick={onClickEvent} className="button">{title}</button>
    </div>
)

export default Button