import { fontStyle } from "../../../styles/fontStyle";
import PerspectiveSectionStyle from "./PerspectiveSection.module.css";
export default function PerspectiveSection() {
  return (
    <div className={PerspectiveSectionStyle.section__container}>
      <div className={PerspectiveSectionStyle.section_heading_container}>
        <p style={{ ...fontStyle.text__normal, color: fontStyle.text_muted }}>
          Perspective Origin
        </p>
      </div>
      <div className={PerspectiveSectionStyle.section_input_container}></div>
    </div>
  );
}
