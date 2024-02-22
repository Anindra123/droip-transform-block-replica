import { ReactElement } from "react";
import IconButtonGroupStyle from "./IconButtonGroup.module.css";
import IconButton from "../../atom/IconButton/IconButton";

interface IconButtonProp {
  inputImage: string;
  width: number;
  height: number;
}

interface IconButtonGroupProp {
  icon_btn_list: Array<ReactElement<IconButtonProp>>;
}

export default function IconButtonGroup({
  icon_btn_list,
}: IconButtonGroupProp) {
  return (
    <div className={IconButtonGroupStyle.icon_btn_group_container}>
      <div className={IconButtonGroupStyle.icon_btn_group_inner_container}>
        {icon_btn_list.map((icon_btn, id) => (
          <IconButton key={id} {...icon_btn.props} />
        ))}
      </div>
    </div>
  );
}
