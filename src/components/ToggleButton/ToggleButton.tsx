import toggleButtonStyle from "./ToggleButton.module.css"
export default function ToggleButton() {


    return (
        <div className={toggleButtonStyle.toggle__btn_container}>
            <input type="checkbox" className={toggleButtonStyle.toggle__btn} />
        </div>
    )
}