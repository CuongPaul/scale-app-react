import { useState } from "react";

import "./index.scss";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience__title">
        Trải nghiệm AI dịch thuật với <span>nhiều model</span>
      </div>
      <div className="experience__sub-title">
        Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </div>
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const tabs = [
    {
      title: "Dịch nhanh",
      image: "/images/fast-translate.png",
    },
    {
      title: "Dịch chuẩn",
      image: "/images/fast-translate.png",
    },
    {
      title: "Dịch hay",
      image: "/images/fast-translate.png",
    },
  ];

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tab__group">
        {tabs.map((item, index) => (
          <div
            key={index}
            onClick={() => setTabIndex(index)}
            className={`tab__item ${tabIndex === index ? "tab--active" : ""}`}
          >
            {item.title}
          </div>
        ))}
      </div>
      <img alt="" src={tabs[tabIndex].image} />
    </div>
  );
};

export default Experience;
