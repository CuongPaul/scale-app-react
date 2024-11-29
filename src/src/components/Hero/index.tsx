import "./index.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="content__title">
          Top 1 ứng dụng <span>AI dịch thuật</span> hiện nay
        </div>
        <div className="content__title">Biến độc giả thành dịch giả</div>
        <div className="cotent__sub-title">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </div>
        <div className="content__button-group">
          <div className="button-item button--light">Xem demo</div>
          <div className="button-item button--primary">Dùng thử miễn phí</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
