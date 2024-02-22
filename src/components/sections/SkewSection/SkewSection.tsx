import InputBlock from "../../../molecule/InputBlock/InputBlock";
import { TEXT_MUTED, fontStyle } from "../../../styles/fontStyle";
import SkewSectionStyle from "./SkewSection.module.css";
export default function SkewSection() {
  return (
    <div className={SkewSectionStyle.skew_section__container}>
      <div className={SkewSectionStyle.skew_section_heading_container}>
        <p style={{ ...fontStyle.text__normal, color: TEXT_MUTED }}>Skew</p>
      </div>
      <div className={SkewSectionStyle.skew_section_input_container}>
        <InputBlock
          input_name="x_axis"
          input_title="X"
          input_value={48}
          dropdown_options={["deg"]}
          flex_container_full={false}
        />
        <InputBlock
          input_name="y_axis"
          input_title="Y"
          input_value={8}
          dropdown_options={["deg"]}
          flex_container_full={false}
        />
      </div>
    </div>
  );
}
