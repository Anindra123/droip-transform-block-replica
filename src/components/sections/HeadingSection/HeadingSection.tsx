import ToggleButton from "../../../atom/ToggleButton/ToggleButton";
import backButtonIcon from "../../../assets/reverse-reset-icons.svg";
import transformHeadingIcon from "../../../assets/transform-heading-icon.svg";
import { fontStyle } from "../../../styles/fontStyle";
import HeadingStyles from "./HeadingSection.module.css";
import IconButton from "../../../atom/IconButton/IconButton";

export default function HeadingSection() {
  return (
    <>
      <div className={HeadingStyles.heading__section_container}>
        <div className={HeadingStyles.heading__section_title_container}>
          <img src={transformHeadingIcon} width={32} height={32} />
          <p style={fontStyle.text__lg}>Transform</p>
        </div>
        <IconButton inputImage={backButtonIcon} width={32} height={32} />
        <ToggleButton button_size="md" />
      </div>
      <div className={HeadingStyles.heading__divider} />
    </>
  );
}
