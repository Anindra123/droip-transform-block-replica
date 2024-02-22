import DividerStyle from "./Divider.module.css";

export default function Divider({ isVisible }: { isVisible: boolean }) {
  return <div className={DividerStyle.divider} hidden={!isVisible}></div>;
}
