import OriginTransformBlockStyle from "./OriginTransformBlock.module.css";
import SettingsIcon from "../../../assets/settings_icon.svg";
import TextIconButton from "../../../molecule/TextIconButton/TextIconButton";
export default function OriginTransformBlock() {
  return (
    <div className={OriginTransformBlockStyle.origin_transform_block_container}>
      <TextIconButton
        button_icon={SettingsIcon}
        button_text="Set Transform Origin"
      />
    </div>
  );
}
