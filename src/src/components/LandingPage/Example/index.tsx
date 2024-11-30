import { useState } from "react";

import "./index.scss";

const Example = () => {
  const contents = [
    {
      name: "Dịch bằng từ điền",
      image: "/images/words-translate-table.png",
      icon: (isActive: boolean) => <BookIcon isActive={isActive} />,
      description:
        "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      name: "Dịch bằng AI",
      image: "/images/words-translate-table.png",
      icon: (isActive: boolean) => <AIIcon isActive={isActive} />,
      description:
        "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      name: "Dịch bằng thủ công",
      image: "/images/words-translate-table.png",
      icon: (isActive: boolean) => <PencilIcon isActive={isActive} />,
      description:
        "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ];

  const [contentIndex, setContentIndex] = useState(0);

  return (
    <div className="example-container">
      <img alt="" src={contents[contentIndex].image} />
      <div className="example-content">
        <div className="content__title">Kho từ điển đa dang</div>
        {contents.map((item, index) => (
          <div key={index} className="content__item">
            <div
              onClick={() => setContentIndex(index)}
              className={`item__name ${
                contentIndex === index ? "item--active" : ""
              }`}
            >
              <div className="name__icon">
                {item.icon(contentIndex === index)}
              </div>
              <div className="name__text">{item.name}</div>
            </div>
            {contentIndex === index ? (
              <div className="item__description">{item.description}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

const BookIcon = ({ isActive = false }) => {
  return (
    <svg
      width="14"
      height="16"
      fill="none"
      viewBox="0 0 14 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={isActive ? "#1677FF" : "#666666"}
        d="M3 0H12H13C13.2917 0 13.5312 0.09375 13.7188 0.28125C13.9062 0.46875 14 0.708333 14 1V11C14 11.2917 13.9062 11.5312 13.7188 11.7188C13.5312 11.9062 13.2917 12 13 12V14C13.2917 14 13.5312 14.0938 13.7188 14.2812C13.9062 14.4688 14 14.7083 14 15C14 15.2917 13.9062 15.5312 13.7188 15.7188C13.5312 15.9062 13.2917 16 13 16H12H3C2.14583 15.9792 1.4375 15.6875 0.875 15.125C0.3125 14.5625 0.0208333 13.8542 0 13V3C0.0208333 2.14583 0.3125 1.4375 0.875 0.875C1.4375 0.3125 2.14583 0.0208333 3 0ZM3 12C2.70833 12 2.46875 12.0938 2.28125 12.2812C2.09375 12.4688 2 12.7083 2 13C2 13.2917 2.09375 13.5312 2.28125 13.7188C2.46875 13.9062 2.70833 14 3 14H11V12H3H11H3ZM4 4.5C4.02083 4.8125 4.1875 4.97917 4.5 5H10.5C10.8125 4.97917 10.9792 4.8125 11 4.5C10.9792 4.1875 10.8125 4.02083 10.5 4H4.5C4.1875 4.02083 4.02083 4.1875 4 4.5ZM4.5 6C4.1875 6.02083 4.02083 6.1875 4 6.5C4.02083 6.8125 4.1875 6.97917 4.5 7H10.5C10.8125 6.97917 10.9792 6.8125 11 6.5C10.9792 6.1875 10.8125 6.02083 10.5 6H4.5H10.5H4.5Z"
      />
    </svg>
  );
};

const AIIcon = ({ isActive = false }) => {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={isActive ? "#1677FF" : "#666666"}
        d="M10.25 2.65625L12 2L12.6562 0.25C12.7188 0.0833333 12.8333 0 13 0C13.1667 0 13.2812 0.0833333 13.3438 0.25L14 2L15.7812 2.65625C15.9271 2.71875 16 2.83333 16 3C16 3.16667 15.9271 3.28125 15.7812 3.34375L14 4L13.3438 5.78125C13.2812 5.92708 13.1667 6 13 6C12.8333 6 12.7188 5.92708 12.6562 5.78125L12 4L10.25 3.34375C10.0833 3.28125 10 3.16667 10 3C10 2.83333 10.0833 2.71875 10.25 2.65625ZM6.40625 2.28125L8.0625 5.84375L11.625 7.5C11.8125 7.60417 11.9062 7.75 11.9062 7.9375C11.9062 8.14583 11.8125 8.30208 11.625 8.40625L8.0625 10.0625L6.40625 13.625C6.30208 13.8125 6.15625 13.9062 5.96875 13.9062C5.76042 13.9062 5.60417 13.8125 5.5 13.625L3.84375 10.0625L0.28125 8.40625C0.09375 8.32292 0 8.17708 0 7.96875C0 7.76042 0.09375 7.60417 0.28125 7.5L3.84375 5.84375L5.5 2.28125C5.60417 2.09375 5.76042 2 5.96875 2C6.17708 2 6.32292 2.09375 6.40625 2.28125ZM12 12L12.6562 10.25C12.7188 10.0833 12.8333 10 13 10C13.1667 10 13.2812 10.0833 13.3438 10.25L14 12L15.7812 12.6562C15.9271 12.7188 16 12.8333 16 13C16 13.1667 15.9271 13.2812 15.7812 13.3438L14 14L13.3438 15.7812C13.2812 15.9271 13.1667 16 13 16C12.8333 16 12.7188 15.9271 12.6562 15.7812L12 14L10.25 13.3438C10.0833 13.2812 10 13.1667 10 13C10 12.8333 10.0833 12.7188 10.25 12.6562L12 12L10.25 12.6562L12 12Z"
      />
    </svg>
  );
};

const PencilIcon = ({ isActive = false }) => {
  return (
    <svg
      width="16"
      height="15"
      fill="none"
      viewBox="0 0 16 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={isActive ? "#1677FF" : "#666666"}
        d="M12.5117 1.26953L13.6055 2.36328L12.5117 1.26953L13.6055 2.36328C13.9336 2.70964 14.0977 3.11979 14.0977 3.59375C14.0977 4.04948 13.9336 4.45964 13.6055 4.82422L12.2656 6.16406L8.71094 2.60938L10.0508 1.26953C10.3971 0.941406 10.8073 0.777344 11.2812 0.777344C11.737 0.777344 12.1471 0.941406 12.5117 1.26953ZM1.73828 9.60938L8.10938 3.21094L1.73828 9.60938L8.10938 3.21094L11.6641 6.76562L5.29297 13.1367C5.0013 13.4284 4.65495 13.638 4.25391 13.7656L0.972656 14.7227C0.717448 14.7956 0.498698 14.7409 0.316406 14.5586C0.152344 14.3763 0.0976562 14.1576 0.152344 13.9023L1.10938 10.6211C1.23698 10.2201 1.44661 9.88281 1.73828 9.60938ZM6.90625 13.4375H15.2188H6.90625H15.2188C15.6198 13.474 15.8385 13.6927 15.875 14.0938C15.8385 14.4948 15.6198 14.7135 15.2188 14.75H6.90625C6.50521 14.7135 6.28646 14.4948 6.25 14.0938C6.28646 13.6927 6.50521 13.474 6.90625 13.4375Z"
      />
    </svg>
  );
};

export default Example;
