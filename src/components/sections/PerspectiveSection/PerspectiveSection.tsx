import InputBlock from "../../../molecule/InputBlock/InputBlock";
import PerspectiveOriginBox from "../../../molecule/PerspectiveOriginBox/PerspectiveOriginBox";
import { fontStyle } from "../../../styles/fontStyle";
import PerspectiveSectionStyle from "./PerspectiveSection.module.css";
import HorizontalHandleIcon from "../../../assets/horizontal_handle_icon.svg";
import VerticalHandleIcon from "../../../assets/vertical_handle_icon.svg";
export default function PerspectiveSection() {
  return (
    <div className={PerspectiveSectionStyle.section__container}>
      <div className={PerspectiveSectionStyle.section_heading_container}>
        <p style={{ ...fontStyle.text__normal, color: fontStyle.text_muted }}>
          Perspective Origin
        </p>
      </div>
      <div className={PerspectiveSectionStyle.section_input_container}>
        <PerspectiveOriginBox />
        <div className={PerspectiveSectionStyle.input_container}>
          <InputBlock
            dropdown_options={["%"]}
            input_name="Left"
            input_title="Left"
            icon={HorizontalHandleIcon}
            input_value={25}
            gap={8}
            inputFontStyle={fontStyle.text__md}
            inputFontColor={fontStyle.text_muted}
          />
          <InputBlock
            dropdown_options={["%"]}
            input_name="Top"
            input_title="Top"
            icon={VerticalHandleIcon}
            input_value={25}
            gap={8}
            inputFontStyle={fontStyle.text__md}
            inputFontColor={fontStyle.text_muted}
          />
        </div>
      </div>
    </div>
  );
}
