import InputBlock from "../../../molecule/InputBlock/InputBlock";
import { fontStyle } from "../../../styles/fontStyle";
import DistanceSectionStyle from "./DistanceSection.module.css";
export default function DistanceSection() {
  return (
    <div className={DistanceSectionStyle.section__container}>
      <div className={DistanceSectionStyle.section_heading_container}>
        <p style={{ ...fontStyle.text__normal, color: fontStyle.text_muted }}>
          Distance
        </p>
      </div>
      <div className={DistanceSectionStyle.section_input_container}>
        <InputBlock
          dropdown_options={["px"]}
          input_name="self-distance"
          input_title="Self"
          input_value={46}
        />
        <InputBlock
          dropdown_options={["px"]}
          input_name="child-distance"
          input_title="Child"
          input_value={205}
        />
      </div>
    </div>
  );
}
