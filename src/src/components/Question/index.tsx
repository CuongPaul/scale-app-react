import { useState } from "react";

import "./index.scss";

const Question = () => {
  const questions = [
    {
      id: "1",
      question: "Tại sao nên sử dụng AI dịch tiểu thuyết?",
      answer:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    },
    {
      id: "2",
      question: "Mực là gì?",
      answer:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    },
    {
      id: "3",
      question: "Làm thế nào để dịch một tác phẩm?",
      answer:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    },
    {
      id: "4",
      question: "AI dịch thuật hỗ trợ những file nào?",
      answer:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    },
    {
      id: "5",
      question: "Title",
      answer:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    },
  ];

  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  const handleClickQuestion = (id: string) => {
    const newSelectedQuestions = [...selectedQuestions];

    const index = newSelectedQuestions.indexOf(id);
    if (index === -1) {
      newSelectedQuestions.push(id);
    } else {
      newSelectedQuestions.splice(index, 1);
    }

    setSelectedQuestions(newSelectedQuestions);
  };

  return (
    <div className="question-container">
      <div className="question__title">Câu hỏi thường gặp</div>
      <div className="question__sub-title">
        Không tìm thấy câu trả lời ở đây?{" "}
        <span>Hãy liên lạc với chúng tôi.</span>
      </div>
      <div className="question__box">
        {questions.map((item) => (
          <div key={item.id} className="box__item">
            <div
              className={`item__question ${
                selectedQuestions.includes(item.id) ? "item--active" : ""
              }`}
              onClick={() => handleClickQuestion(item.id)}
            >
              <span>{item.question}</span>
              <ArrowIcon isActive={selectedQuestions.includes(item.id)} />
            </div>
            {selectedQuestions.includes(item.id) ? (
              <div className="item__anser">{item.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

const ArrowIcon = ({ isActive = false }) => {
  return (
    <svg
      width="18"
      height="11"
      fill="none"
      viewBox="0 0 18 11"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isActive ? (
        <path
          fill="#1677FF"
          d="M8.20312 0.703125C8.73438 0.265625 9.26562 0.265625 9.79688 0.703125L17.2969 8.20312C17.7344 8.73438 17.7344 9.26562 17.2969 9.79688C16.7656 10.2344 16.2344 10.2344 15.7031 9.79688L9 3.09375L2.29688 9.79688C1.76562 10.2344 1.23438 10.2344 0.703125 9.79688C0.265625 9.26562 0.265625 8.73438 0.703125 8.20312L8.20312 0.703125Z"
        />
      ) : (
        <path
          fill="#222222"
          d="M9.79688 10.2969C9.26562 10.7344 8.73438 10.7344 8.20312 10.2969L0.703125 2.79688C0.265625 2.26562 0.265625 1.73438 0.703125 1.20312C1.23438 0.765625 1.76562 0.765625 2.29688 1.20312L9 7.90625L15.7031 1.20312C16.2344 0.765625 16.7656 0.765625 17.2969 1.20312C17.7344 1.73438 17.7344 2.26562 17.2969 2.79688L9.79688 10.2969Z"
        />
      )}
    </svg>
  );
};

export default Question;
