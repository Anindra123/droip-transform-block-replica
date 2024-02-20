import { TEXT_WHITE, fontStyle } from "../../styles/fontStyle"
import InputStyles from "./Input.module.css"

export default function Input({ input_value }:
    { input_value: number, input_name: string }) {
    return (
        <>
            <div className={InputStyles.text_input}
                style={{ ...fontStyle.text__normal, color: TEXT_WHITE }}

                contentEditable={true} role="textbox">{input_value}</div>

        </>
    )
}