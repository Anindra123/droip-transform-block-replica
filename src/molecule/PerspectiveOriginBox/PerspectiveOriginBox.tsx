import PerspectiveOriginBoxStyle from "./PerspectiveOriginBox.module.css";
export default function PerspectiveOriginBox() {
  return (
    <div className={PerspectiveOriginBoxStyle.container}>
      <div className={PerspectiveOriginBoxStyle.inner_container}>
        <div className={PerspectiveOriginBoxStyle.box_row}>
          <a className={`${PerspectiveOriginBoxStyle.svg_btn} `} role="button">
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
          <a className={`${PerspectiveOriginBoxStyle.svg_btn} `} role="button">
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M9 1H1"
                stroke="#0CF5FF"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="5" cy="6.5" r="1.5" fill="#0CF5FF" />
            </svg>
          </a>
          <a className={`${PerspectiveOriginBoxStyle.svg_btn} `} role="button">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M9 9V2.37143C9 1.68571 8.54286 1 7.62857 1H1"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="3.5" cy="6.5" r="1.5" fill="white" />
            </svg>
          </a>
        </div>
        <div className={PerspectiveOriginBoxStyle.box_row}>
          <a className={`${PerspectiveOriginBoxStyle.svg_btn} `} role="button">
            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M1 9L1 1"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="6.5" cy="5" r="1.5" fill="white" />
            </svg>
          </a>

          <a
            className={`${PerspectiveOriginBoxStyle.svg_plus_icon} `}
            role="button"
          >
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.375 0C6.16789 0 6 0.167893 6 0.375V5.25H0.375C0.167893 5.25 0 5.41789 0 5.625C0 5.83211 0.167894 6 0.375 6H6V11.625C6 11.8321 6.16789 12 6.375 12C6.58211 12 6.75 11.8321 6.75 11.625V6H12.375C12.5821 6 12.75 5.83211 12.75 5.625C12.75 5.41789 12.5821 5.25 12.375 5.25H6.75V0.375C6.75 0.167893 6.58211 0 6.375 0Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
          </a>
          <a className={`${PerspectiveOriginBoxStyle.svg_btn} `} role="button">
            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 9L8 1" stroke="white" stroke-linecap="round" />
              <circle cx="2.5" cy="5" r="1.5" fill="white" />
            </svg>
          </a>
        </div>
        <div className={PerspectiveOriginBoxStyle.box_row}>
          <a className={`${PerspectiveOriginBoxStyle.svg_btn} `} role="button">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M1 1V7.62857C1 8.31429 1.45714 9 2.37143 9H9"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="6.5" cy="3.5" r="1.5" fill="white" />
            </svg>
          </a>
          <a className={`${PerspectiveOriginBoxStyle.svg_btn} `} role="button">
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M9 8H1"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="5" cy="2.5" r="1.5" fill="white" />
            </svg>
          </a>
          <a className={`${PerspectiveOriginBoxStyle.svg_btn} `} role="button">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M9 1V7.62857C9 8.31429 8.54286 9 7.62857 9H1"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="3.5" cy="3.5" r="1.5" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
