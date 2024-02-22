import toggleButtonStyle from "./ToggleButton.module.css";
export default function ToggleButton({
  button_size,
}: {
  button_size: "md" | "lg";
}) {
  return (
    <>
      {button_size === "md" && (
        <div
          className={`${toggleButtonStyle.toggle__btn_container} ${toggleButtonStyle.container_md}`}
        >
          <input
            type="checkbox"
            className={`${toggleButtonStyle.toggle__btn} ${toggleButtonStyle.btn_md}`}
          />
        </div>
      )}
      {button_size === "lg" && (
        <div
          className={`${toggleButtonStyle.toggle__btn_container} ${toggleButtonStyle.container_lg}`}
        >
          <input
            type="checkbox"
            className={`${toggleButtonStyle.toggle__btn} ${toggleButtonStyle.btn_lg}`}
          />
        </div>
      )}
    </>
  );
}
