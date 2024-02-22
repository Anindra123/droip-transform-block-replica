import IconButton from "../../../atom/IconButton/IconButton";
import InputBlock from "../../../molecule/InputBlock/InputBlock";
import { TEXT_MUTED, fontStyle } from "../../../styles/fontStyle";
import RotateSectionStyle from "./RotateSection.module.css";
import RotateIconHorizontal from "../../../assets/rotate-icons-horizontal.svg";
import RotateIconVertical from "../../../assets/rotate-icons-vertical.svg";
import IconButtonGroup from "../../../molecule/IconButtonGroup/IconButtonGroup";
export default function RotateSection() {
  const icon_list = [
    <IconButton inputImage={RotateIconHorizontal} width={24} height={24} />,

    <IconButton inputImage={RotateIconVertical} width={24} height={24} />,
  ];

  return (
    <div className={RotateSectionStyle.rotate_section__container}>
      <div className={RotateSectionStyle.rotate_section_heading_container}>
        <p style={{ ...fontStyle.text__normal, color: TEXT_MUTED }}>Rotate</p>
      </div>
      <div className={RotateSectionStyle.rotate_section_input_container}>
        <InputBlock
          input_title="X"
          input_name="x-axis"
          input_value={46}
          dropdown_options={["turn", "rem", "pt"]}
        />

        <InputBlock
          input_title="Z"
          input_name="z-axis"
          input_value={0}
          dropdown_options={["deg", "rem", "pt"]}
        />

        <InputBlock
          input_title="Y"
          input_name="y-axis"
          input_value={0}
          dropdown_options={["rad", "rem", "pt"]}
        />
        <IconButtonGroup icon_btn_list={icon_list} />
      </div>
    </div>
  );
}
