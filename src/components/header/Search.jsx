import "./search.scss";
import suggestImg from "../../img/suggestion.jpg";

import History from "./ContentSlider";
import PopularSearch from "./ContentSlider";

function Search() {
  let popularSearchData = [
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "سوسیس", term: "سوسیس" },
    { id: 10001, text: "تخم مرغ", term: "تخم مرغ" },
    { id: 10001, text: "نوشابه", term: "نوشابه" },
    { id: 10001, text: "روغن", term: "روغن" },
    { id: 10001, text: "سیب زمینی", term: "سیب زمینی" },
    { id: 10001, text: "سیب هوایی", term: "سیب هوایی" },
    { id: 10001, text: "گلیم", term: "گلیم" },
    { id: 10001, text: "قالیچه", term: "قالیچه" },
    { id: 10001, text: "سماور", term: "سماور" },
    { id: 10001, text: "بشکه", term: "بشکه" },
    { id: 10001, text: "چدن", term: "چدن" },
    { id: 10001, text: "آهن", term: "آهن" },
    { id: 10001, text: "موکت", term: "موکت" },
    { id: 10001, text: "ساعت", term: "ساعت" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
  ];
  let userLastSearchData = [
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "سوسیس", term: "سوسیس" },
    { id: 10001, text: "تخم مرغ", term: "تخم مرغ" },
    { id: 10001, text: "نوشابه", term: "نوشابه" },
    { id: 10001, text: "روغن", term: "روغن" },
    { id: 10001, text: "سیب زمینی", term: "سیب زمینی" },
    { id: 10001, text: "سیب هوایی", term: "سیب هوایی" },
    { id: 10001, text: "گلیم", term: "گلیم" },
    { id: 10001, text: "قالیچه", term: "قالیچه" },
    { id: 10001, text: "سماور", term: "سماور" },
    { id: 10001, text: "بشکه", term: "بشکه" },
    { id: 10001, text: "چدن", term: "چدن" },
    { id: 10001, text: "آهن", term: "آهن" },
    { id: 10001, text: "موکت", term: "موکت" },
    { id: 10001, text: "ساعت", term: "ساعت" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
    { id: 10001, text: "همبرگر", term: "همبرگر" },
  ];
  let historyIcon = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-clock"
      viewBox="0 0 16 16"
    >
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
    </svg>,
  ];
  let historyDeleteIcon = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-trash"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
      <path
        fillRule="evenodd"
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      />
    </svg>,
  ];

  let popularSearchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-fire"
      viewBox="0 0 16 16"
    >
      <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
    </svg>
  );

  return (
    <div className="w-100 ddd">
      {/* input */}
      <div className="search-main-div d-flex w-100">
        <span className="serch-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
        <input
          className="form-control input-search me-2 "
          type="text"
          placeholder="جستجو"
        />
      </div>
      {/* suggestion */}
      <div className="w-100  me-2 suggestion">
        <div className="suggestion-img-div w-100">
          <img className="w-100 " src={suggestImg} alt="" />
        </div>
      </div>
      {/* history */}
      <History
        type="last"
        title="آخرین جستجوی شما"
        titleIcon={historyIcon}
        lastIcon={historyDeleteIcon}
        data={userLastSearchData}
      />
      <PopularSearch
        type="popular"
        title=" جستجوهای پرطرفدار"
        titleIcon={popularSearchIcon}
        data={popularSearchData}
      />
    </div>
  );
}

export default Search;
