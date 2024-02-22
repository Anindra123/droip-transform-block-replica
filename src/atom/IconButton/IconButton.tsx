import IconButtonStyle from "./IconButton.module.css";

export default function IconButton({
  inputImage,
  width,
  height,
}: {
  inputImage: string;
  width: number | string;
  height: number | string;
}) {
  return (
    <>
      <a role="button" className={IconButtonStyle.icon__btn}>
        <img src={inputImage} width={width} height={height} />
      </a>
    </>
  );
}
