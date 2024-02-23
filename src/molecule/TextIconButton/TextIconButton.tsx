import { TEXT_WHITE, fontStyle } from "../../styles/fontStyle";
import TextIconButtonStyle from "./TextIconButton.module.css";

interface TextIconButtonProps {
  button_text: string;
  button_icon: string;
}
export default function TextIconButton({
  button_text,
  button_icon,
}: TextIconButtonProps) {
  return (
    <a className={TextIconButtonStyle.text_icon_button} role="button">
      <div className={TextIconButtonStyle.text_icon_button_content_container}>
        <div className={TextIconButtonStyle.button_icon}>
          <img src={button_icon} />
        </div>
        <div>
          <p style={{ ...fontStyle.text__normal, color: TEXT_WHITE }}>
            {button_text}
          </p>
        </div>
      </div>
    </a>
  );
}
