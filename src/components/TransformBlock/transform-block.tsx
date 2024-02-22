import transformBlockStyles from "./transform-block.module.css";
import HeadingSection from "../sections/HeadingSection/HeadingSection";
import MoveSection from "../sections/MoveSection/MoveSection";
import Divider from "../../atom/Divider/Divider";
import RotateSection from "../sections/RotateSection/RotateSection";
import ScaleSection from "../sections/ScaleSection/ScaleSection";
import SkewSection from "../sections/SkewSection/SkewSection";
import OriginTransformBlock from "../ToggleBlock/OriginTransformBlock/OriginTransformBlock";
import ToggleBlock3D from "../ToggleBlock/ToggleBlock3D/ToggleBlock3D";
import DistanceSection from "../sections/DistanceSection/DistanceSection";

export default function TransformBlock() {
  return (
    <div className={transformBlockStyles.transform__block_container}>
      <HeadingSection />
      <div className={transformBlockStyles.content_container}>
        <MoveSection />
        <Divider isVisible={true} />
      </div>
      <div className={transformBlockStyles.content_container}>
        <RotateSection />
        <Divider isVisible={true} />
      </div>
      <div className={transformBlockStyles.content_container}>
        <ScaleSection />
        <Divider isVisible={true} />
      </div>

      <div className={transformBlockStyles.content_container}>
        <SkewSection />
      </div>

      <OriginTransformBlock />
      <ToggleBlock3D />

      <div className={transformBlockStyles.content_container}>
        <DistanceSection />
        <Divider isVisible={true} />
      </div>
    </div>
  );
}
