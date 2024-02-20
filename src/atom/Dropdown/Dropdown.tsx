import { useState } from "react"
import { createPortal } from "react-dom";
import DropdownStyles from "./Dropdown.module.css";
import { TEXT_MUTED_60, fontStyle } from "../../styles/fontStyle";

export default function Dropdown({ dropdown_options }: { dropdown_options: string[] }) {
    const [activeOption, setActiveOption] = useState(dropdown_options[0]);
    return (
        <>
            <a role="button" className={DropdownStyles.drop_down_toggle}
                style={{ ...fontStyle.text__normal, color: TEXT_MUTED_60 }}
            >{activeOption}</a>
            {createPortal(<div hidden>
                {dropdown_options.map((option, id) => (
                    <a onClick={() => { setActiveOption(option) }}
                        key={id}
                        role="button">{option}</a>
                ))}
            </div>, document.body)}
        </>
    )
}