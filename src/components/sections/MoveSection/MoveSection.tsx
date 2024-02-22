import InputBlock from "../../../molecule/InputBlock/InputBlock";
import { TEXT_MUTED, fontStyle } from "../../../styles/fontStyle";
import MoveSectionStyle from "./MoveSection.module.css";

export default function MoveSection() {
  return (
    <div className={MoveSectionStyle.move_section__container}>
      <div className={MoveSectionStyle.move_section_heading_container}>
        <p style={{ ...fontStyle.text__normal, color: TEXT_MUTED }}>Move</p>
      </div>
      <div className={MoveSectionStyle.move_section_input_container}>
        <InputBlock
          input_title="X"
          input_name="x-axis"
          input_value={1000}
          dropdown_options={["px", "rem", "pt"]}
        />

        <InputBlock
          input_title="Z"
          input_name="z-axis"
          input_value={0}
          dropdown_options={["", "rem", "pt"]}
        />

        <InputBlock
          input_title="Y"
          input_name="y-axis"
          input_value={1000}
          dropdown_options={["px", "rem", "pt"]}
        />
      </div>
    </div>
  );
}
