import { useRef, useEffect } from "react";
import "./ContentSlider.scss";

function ContentSlider(props) {
  const btnPrevRef = useRef();
  const btnNextRef = useRef();
  const historyRef = useRef();
  const sliderRef = useRef();

  let data = props.data;

  useEffect(() => {
    let flag = 1;
    if (sliderRef.current.offsetWidth > historyRef.current.offsetWidth) {
      btnNextRef.current.style.display = "inline";

      let sliderChildren = sliderRef.current.childNodes;

      for (let x = 0; x < sliderChildren.length; x++) {
        if (flag) {
          let nextSlideElement =
            sliderRef.current.offsetWidth - sliderChildren[x].offsetLeft >
            historyRef.current.offsetWidth;
          if (nextSlideElement) {
            flag = 0;
            sliderChildren[x].setAttribute("currentRef", "1");
            sliderChildren[x + 1].setAttribute("currentRef", "2");
          }
        }
      }
    }
  }, []);

  const btnNextHandler = () => {
    btnPrevRef.current.style.display = "inline";
    let currentElement = document.querySelector("[currentRef='1']");
    let nextElement = document.querySelector("[currentRef='2']");
    let sliderLeft = sliderRef.current.style.left;

    if (sliderLeft) {
      sliderLeft = sliderRef.current.style.left.split("px");
      sliderRef.current.style.left =
        +sliderLeft[0] + currentElement.offsetWidth + 10 + "px";
      let flag = currentElement.offsetWidth + 10;
      // let ee = setInterval(() => {
      //   flag--;
      //   sliderRef.current.style.left =
      //     +sliderLeft[0] + currentElement.offsetWidth + 10 + "px";
      //   if (!flag) {
      //     clearInterval(ee);
      //   }
      // }, 200);
    } else {
      sliderRef.current.style.left = currentElement.offsetWidth + 20 + "px";
    }

    currentElement.setAttribute("currentRef", "0");
    nextElement.setAttribute("currentRef", "1");
    nextElement.nextElementSibling &&
      nextElement.nextElementSibling.setAttribute("currentRef", "2");

    if (currentElement.offsetLeft === 10) {
      btnNextRef.current.style.display = "none";
    }
  };

  const btnPrevHandler = () => {
    btnNextRef.current.style.display = "inline";
  };

  const btnDeleteHandler = () => {
    historyRef.current.remove();
  };

  return (
    <div ref={historyRef} className="history  mt-3">
      <button
        onClick={btnPrevHandler}
        ref={btnPrevRef}
        className="btn history-links-prev p-0"
      >
        <svg
          xmlns="http://sliderChildrenw.w3.org/2000/svg"
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
      <button
        onClick={btnNextHandler}
        ref={btnNextRef}
        className="btn history-links-next p-0"
      >
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
      <div className="pt-3 history-links">
        <div className="slider" ref={sliderRef}>
          {data.map((link, index) => {
            let searchTerm = `/page?term=${link.term}`;
            return (
              <a
                key={index + link}
                className="history-links-link"
                href={searchTerm}
                currentRef="0"
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
