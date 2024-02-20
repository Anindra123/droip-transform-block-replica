// import IconButton from "../../../atom/IconButton/IconButton";
// import IconButtonGroup from "../../../molecule/IconButtonGroup/IconButtonGroup";
import InputBlock from "../../../molecule/InputBlock/InputBlock";
import { TEXT_MUTED, fontStyle } from "../../../styles/fontStyle";
import RotateSectionStyle from "./RotateSection.module.css";
export default function RotateSection() {
    // const icon_btn_list = [<IconButton inputImage=]

    return (
        <div className={RotateSectionStyle.rotate_section__container}>
            <div className={RotateSectionStyle.rotate_section_heading_container}>
                <p style={{ ...fontStyle.text__normal, color: TEXT_MUTED }}>Move</p>
            </div>
            <div className={RotateSectionStyle.move_section_input_container}>
                <InputBlock input_title="X"
                    input_name="x-axis"
                    input_value={46}
                    dropdown_options={["turn", "rem", "pt"]} />

                <InputBlock input_title="Z"
                    input_name="z-axis"
                    input_value={0}
                    dropdown_options={["deg", "rem", "pt"]} />

                <InputBlock input_title="Y"
                    input_name="y-axis"
                    input_value={0}
                    dropdown_options={["rad", "rem", "pt"]} />


            </div>

        </div>
    )
}