import Dropdown from "../../atom/Dropdown/Dropdown";
import Input from "../../atom/Input/Input";
import { TEXT_MUTED_50, fontStyle } from "../../styles/fontStyle";
import InputBlockStyles from "./InputBlock.module.css";

const flex_50 = { flexBasis: "50%" };

interface InputBlockProps {
  input_title: string;
  input_name: string;
  input_value: number;
  flex_container_full?: boolean;
  dropdown_options: string[];
}

export default function InputBlock({
  input_title,
  input_name,
  input_value,
  dropdown_options,
  flex_container_full = true,
}: InputBlockProps) {
  return (
    <div
      className={InputBlockStyles.input__block_container}
      style={flex_container_full ? flex_50 : {}}
    >
      <div className={InputBlockStyles.input__block_title_container}>
        <p style={{ ...fontStyle.text__lg, color: TEXT_MUTED_50 }}>
          {input_title}
        </p>
      </div>
      <div className={InputBlockStyles.input__block_input_container}>
        <Input input_value={input_value} input_name={input_name} />
        <Dropdown dropdown_options={dropdown_options} />
      </div>
    </div>
  );
}
