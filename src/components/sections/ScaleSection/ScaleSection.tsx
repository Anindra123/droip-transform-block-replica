import IconButton from "../../../atom/IconButton/IconButton";
import IconButtonGroup from "../../../molecule/IconButtonGroup/IconButtonGroup";
import InputBlock from "../../../molecule/InputBlock/InputBlock";
import { TEXT_MUTED, fontStyle } from "../../../styles/fontStyle";
import ExpandIcon from "../../../assets/expand-icon.svg";
import CollapseIcon from "../../../assets/collapse-icon.svg";

import ScaleSectionStyle from "./ScaleSection.module.css";
import UniformScaleToggle from "../../../molecule/UniformScaleToggle/UniformScaleToggle";

export default function ScaleSection() {
  const icon_list = [
    <IconButton inputImage={ExpandIcon} width={24} height={24} />,
    <IconButton inputImage={CollapseIcon} width={24} height={24} />,
  ];
  return (
    <div className={ScaleSectionStyle.scale_section__container}>
      <div className={ScaleSectionStyle.scale_section_heading_container}>
        <p style={{ ...fontStyle.text__normal, color: TEXT_MUTED }}>Scale</p>
      </div>
      <div className={ScaleSectionStyle.scale_section_input_container}>
        <div className={ScaleSectionStyle.container__start}>
          <InputBlock
            input_title="X"
            input_name="x-axis"
            input_value={8}
            dropdown_options={["", "rem", "pt"]}
          />

          <InputBlock
            input_title="Y"
            input_name="y-axis"
            input_value={8}
            dropdown_options={["", "rem", "pt"]}
          />
        </div>
        <UniformScaleToggle />
        <div className={ScaleSectionStyle.container__end}>
          <InputBlock
            input_title="Z"
            input_name="z-axis"
            input_value={8}
            dropdown_options={["", "rem", "pt"]}
          />

          <IconButtonGroup icon_btn_list={icon_list} />
        </div>
      </div>
    </div>
  );
}
