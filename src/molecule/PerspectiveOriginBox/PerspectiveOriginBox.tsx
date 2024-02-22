import PerspectiveOriginBoxStyle from "./PerspectiveOriginBox.module.css";
export default function PerspectiveOriginBox() {
  return (
    <div className={PerspectiveOriginBoxStyle.container}>
      <div className={PerspectiveOriginBoxStyle.inner_container}>
        <a
          className={`${PerspectiveOriginBoxStyle.svg_btn} ${PerspectiveOriginBoxStyle.top_left}`}
          role="button"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M1 9V2.37143C1 1.68571 1.45714 1 2.37143 1H9"
              stroke="white"
              stroke-linecap="round"
            />
            <circle opacity="0.6" cx="6.5" cy="6.5" r="1.5" fill="white" />
          </svg>
        </a>
        <a
          className={`${PerspectiveOriginBoxStyle.svg_btn} ${PerspectiveOriginBoxStyle.top_left}`}
          role="button"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M1 9V2.37143C1 1.68571 1.45714 1 2.37143 1H9"
              stroke="white"
              stroke-linecap="round"
            />
            <circle opacity="0.6" cx="6.5" cy="6.5" r="1.5" fill="white" />
          </svg>
        </a>
      </div>
    </div>
  );
}
