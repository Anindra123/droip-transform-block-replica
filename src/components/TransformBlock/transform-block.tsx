import transformBlockStyles from "./transform-block.module.css";
import HeadingSection from "../sections/HeadingSection/HeadingSection";
import MoveSection from "../sections/MoveSection/MoveSection";

export default function TransformBlock() {
    return (
        <div className={transformBlockStyles.transform__block_container}>

            <HeadingSection />
            <div className={transformBlockStyles.content_container}>
                <MoveSection />
            </div>

        </div >

    )

}



