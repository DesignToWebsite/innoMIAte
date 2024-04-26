import React, { useState } from "react";
import styled from "styled-components";
import { RED_COLOR,GREEN_COLOR } from "../../style/Colors";
import data from "../../data/data.json";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <FAQContainer className="container">
      <Title>FAQ</Title>
      {data.faq.map((item, index) => (
        <QuestionItem key={index}>
          <QuestionHeader onClick={() => handleQuestionClick(index)}>
            <Question>
                <Circle className={selectedQuestion === index ? "open" : ""}/>
                <QuestionText>{item.question}</QuestionText>
            </Question>
            <ArrowIcon className={selectedQuestion === index ? "open" : ""}>&#9658;</ArrowIcon>
          </QuestionHeader>
          {selectedQuestion === index && (
            <AnswerContainer>
              <TitleAnswer>{item.titleAnswer}</TitleAnswer>
              <AnswerText>{item.answer}</AnswerText>
            </AnswerContainer>
          )}
        </QuestionItem>
      ))}
    </FAQContainer>
  );
};

const FAQContainer = styled.div`
  
`;

const Title = styled.h3`
  color: ${RED_COLOR};
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 64px;
  font-weight: 700;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const QuestionItem = styled.div`
  border: 0.1px solid #ccc;
  margin-bottom: 10px;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

const QuestionText = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const ArrowIcon = styled.div`
  color: gray;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
  &.open {
    transform: rotate(90deg);
    transition: transform 0.3s ease;
  }
`;

const Question = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
`;

const Circle = styled.div`
    background-color: ${RED_COLOR};
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    margin-top: 3px;
    &.open {
        background-color: ${GREEN_COLOR};
  }
`;

const AnswerContainer = styled.div`
  background-color: #efecec;
  padding: 10px;
`;

const AnswerText = styled.div`
    margin-left: 40px;
`;

const TitleAnswer = styled.div`
    font-weight: 700;
    font-size: 18px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 10px;
    margin-left: 40px;
    margin-bottom: 10px;
`;

export default FAQ;
