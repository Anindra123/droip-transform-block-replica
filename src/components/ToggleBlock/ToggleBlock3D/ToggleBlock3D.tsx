import ToggleButton from "../../../atom/ToggleButton/ToggleButton";
import { fontStyle } from "../../../styles/fontStyle";
import ToggleBlockStyle from "./ToggleBlockStyle.module.css";

export default function ToggleBlock3D() {
  return (
    <div className={ToggleBlockStyle.container}>
      <div>
        <p
          style={{
            ...fontStyle.text__md,
            color: fontStyle.text_muted_80,
          }}
        >
          3D transformation
        </p>
      </div>
      <div>
        <ToggleButton button_size="lg" />
      </div>
    </div>
  );
}
