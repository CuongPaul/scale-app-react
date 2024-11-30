import "./index.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer__main">
        <div className="main__content">
          <img alt="" className="content__logo" src="/images/appota-logo.png" />
          <div className="content__title">Top 1 AI dịch thuật hiện nay!</div>
          <div className="content__sub-title">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, Horem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum,
          </div>
          <div className="content__button">Dùng thử miễn phí</div>
        </div>
        <img alt="" className="main__image" src="/images/map.png" />
      </div>
      <div className="footer__sub">
        <div className="sub__item">
          <span>Privacy Policy</span>
        </div>
        <div className="sub__item">
          <span>Terms of Use</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
