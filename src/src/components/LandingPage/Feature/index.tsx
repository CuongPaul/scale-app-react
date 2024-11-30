import "./index.scss";

const Feature = () => {
  const features = [
    {
      name: "Bản dịch chính xác",
      icon: "/images/document-icon.svg",
      description:
        "Chỉ cần chọn nhiều ngôn ngữ đầu ra trong số 26 ngôn ngữ có sẵn mà bạn thích và bạn sẽ nhận được bản dịch có độ chính xác cao ngay lập tức.",
    },
    {
      name: "Thuật toán AI",
      icon: "/images/ai-icon.svg",
      description:
        "Độ chính xác và chất lượng dịch thuật vô song của thuật toán Appota AI.",
    },
    {
      name: "Thuật toán AI",
      icon: "/images/document-icon.svg",
      description:
        "Độ chính xác và chất lượng dịch thuật vô song của thuật toán Appota AI.",
    },
    {
      name: "Nhiều ngôn ngữ",
      icon: "/images/language-icon.svg",
      description:
        "Nhanh chóng dịch ứng dụng của bạn sang các ngôn ngữ phổ biến. Dịch đa ngôn ngữ là chìa khóa để tiếp cận đối tượng toàn cầu.",
    },
    {
      name: "Định dạng nhiều tập tin",
      icon: "/images/file-icon.svg",
      description:
        "Sử dụng trình dịch của chúng tôi cho các tệp json, strings, arb hoặc xml. Tải lên, dịch và nhận kết quả ở định dạng tệp tương ứng cho từng ngôn ngữ.",
    },
    {
      name: "Phát hiện ngôn ngữ",
      icon: "/images/detect-icon.svg",
      description:
        "Thuật toán nhận dạng thông minh tự động phát hiện ngôn ngữ nhập của tệp.",
    },
  ];

  return (
    <div className="feature-container">
      <div className="feature__title">
        Biến độc giả thành <span>dịch giả</span>
      </div>
      <div className="feature__sub-title">
        Được tích hợp nhiều tính năng giúp bạn dịch nhanh chóng, dễ dàng và
        chính xác
      </div>
      <div className="feature__group">
        {features.map((item, index) => (
          <div key={index} className="feature__item">
            <div className="item__icon">
              <img alt="" src={item.icon} />
            </div>
            <div className="item__name">{item.name}</div>
            <div className="item__description">{item.description}</div>
          </div>
        ))}
      </div>
      <div className="feature__button">Dùng thử miễn phí</div>
    </div>
  );
};

export default Feature;
