import Dropdown from "../../atom/Dropdown/Dropdown";
import Input from "../../atom/Input/Input";
import { fontStyle } from "../../styles/fontStyle";
import InputBlockStyles from "./InputBlock.module.css";

const flex_50 = { flexBasis: "50%" };

interface InputBlockProps {
  input_title: string;
  input_name: string;
  input_value: number;
  flex_container_full?: boolean;
  inputFontStyle?: object;
  inputFontColor?: string;
  gap?: number | string;
  dropdown_options: string[];
  icon?: string | null;
}

export default function InputBlock({
  input_title,
  input_name,
  input_value,
  dropdown_options,
  icon,
  inputFontStyle = fontStyle.text__lg,
  inputFontColor = fontStyle.text_muted_50,

  gap = "4px",
  flex_container_full = true,
}: InputBlockProps) {
  return (
    <div
      className={InputBlockStyles.input__block_container}
      style={flex_container_full ? flex_50 : {}}
    >
      <div
        className={InputBlockStyles.input__block_title_container}
        style={{ marginRight: gap }}
      >
        {icon && (
          <div className={InputBlockStyles.icon_container}>
            <img src={icon} />
          </div>
        )}
        <div>
          <p style={{ ...inputFontStyle, color: inputFontColor }}>
            {input_title}
          </p>
        </div>
      </div>
      <div className={InputBlockStyles.input__block_input_container}>
        <Input input_value={input_value} input_name={input_name} />
        <Dropdown dropdown_options={dropdown_options} />
      </div>
    </div>
  );
}
