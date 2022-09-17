import { useRef } from "react";
import "./ContentSlider.scss";

function ContentSlider(props) {
  let lastSearchDivRef = useRef();
  let data = props.data;

  const btnDeleteHandler = (e) => {
    console.log(e);
  };
  return (
    <div className="history  mt-3">
      <button className="btn history-links-prev p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <button className="btn history-links-next p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
      {/* title */}
      <div className="history-title d-flex justify-content-between">
        <div className="icon-text">
          <span>{props.titleIcon}</span>
          <span className="history-title-text"> {props.title}</span>
        </div>
        <div onClick={btnDeleteHandler} className="delete-icon">
          <button className="btn btn-secondary p-0">
            {props.lastIcon ? props.lastIcon : ""}
          </button>
        </div>
      </div>
      {/* link */}
      <div className="pt-3 history-links pe-5">
        <div className="slider">
          {data.map((link, index) => {
            let searchTerm = `/page?term=${link.term}`;
            return (
              <a
                key={index + link}
                className="history-links-link"
                href={searchTerm}
              >
                <span>{link.text} </span>
                <span className="mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContentSlider;
