import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./index.scss";

const Review = () => {
  const reviews = [
    {
      id: "1",
      starNumber: 5,
      owner: {
        name: "Jake George",
        position: "Founder",
      },
      message:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: "2",
      starNumber: 4,
      owner: {
        name: "Jake George",
        position: "Founder",
      },
      message:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: "3",
      starNumber: 3,
      owner: {
        name: "Jake George",
        position: "Founder",
      },
      message:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: "4",
      starNumber: 2,
      owner: {
        name: "Jake George",
        position: "Founder",
      },
      message:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: "5",
      starNumber: 5,
      owner: {
        name: "Jake George",
        position: "Founder",
      },
      message:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ];

  return (
    <div className="review-container">
      <div className="review__title">Câu hỏi thường gặp</div>
      <div className="review__sub-title">
        Hãy tham gia cùng hàng ngàn độc giả khác
      </div>
      <div className="question__box">
        <Swiper
          loop={true}
          slidesPerView={3}
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="review__item">
                <div className="item__star">
                  {Array(item.starNumber)
                    .fill(0)
                    .map(() => (
                      <img alt="" src="/images/star-icon.svg" />
                    ))}
                </div>
                <div className="item__message">{item.message}</div>
                <div className="item__owner-name">{item.owner.name}</div>
                <div className="item__owner-position">
                  {item.owner.position}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
