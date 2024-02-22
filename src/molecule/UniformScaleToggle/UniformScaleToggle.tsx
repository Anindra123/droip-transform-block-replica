import IconButton from "../../atom/IconButton/IconButton";
import UniformScaleToggleStyle from "./UniformScaleToggle.module.css";
import ScaleToggleButtonIcon from "../../assets/scale_toggle_btn_icon.svg";

export default function UniformScaleToggle() {
  return (
    <div className={UniformScaleToggleStyle.uniform__scale_toggle_container}>
      <div className={UniformScaleToggleStyle.top__icon}>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H12V13.5"
            stroke="white"
            stroke-opacity="0.6"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className={UniformScaleToggleStyle.toggle__button_container}>
        <IconButton inputImage={ScaleToggleButtonIcon} width={""} height={""} />
      </div>
      <div className={UniformScaleToggleStyle.bottom__icon}>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13H12V0.5"
            stroke="white"
            stroke-opacity="0.6"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
