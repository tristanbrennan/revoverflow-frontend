import { Input } from "@material-ui/core";
import React, { useState, FC } from "react";
import { Answer } from "../../models/answer";
import { Question } from "../../models/question";

export const AddFAQComponent: React.FC = () => {
  const [question, setQuestion] = useState<Question>();
  const [answer, setAnswer] = useState<Answer>();

  return (
    <form id="addFAQForm">
      <label>Question:</label>
      <input type="text" id="questionInput" />
      <label>Answer:</label>
      <input type="text" id="answerInput" />
      <button type="submit" id="submitFAQButton"/>
    </form>
  );
};
