import transformHeadingIcon from "../../assets/transform-heading-icon.svg";
import backButtonIcon from "../../assets/reverse-reset-icons.svg";
import { fontStyle } from "../../styles/fontStyle";
import transformBlockStyles from "./transform-block.module.css";
import ToggleButton from "../ToggleButton/ToggleButton";

export default function TransformBlock() {
    return (
        <div className={transformBlockStyles.transform__block_container}>
            <div className={transformBlockStyles.top__block_container}>
                <div className={transformBlockStyles.top__bar_heading_container}>
                    <img src={transformHeadingIcon} width={32} height={32} />
                    <p style={fontStyle.text__lg}>Transform</p>
                </div>
                <a role="button" className={transformBlockStyles.back__btn}>
                    <img src={backButtonIcon} width={32} height={32} />
                </a>
                <ToggleButton />
            </div>

        </div >

    )

}



