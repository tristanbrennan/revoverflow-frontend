import { Input } from "@material-ui/core";
import React, { useState, FC } from "react";
import { Answer } from "../../models/answer";
import { Question } from "../../models/question";

export interface AddFAQComponentProps{
  
}


export const AddFAQComponent: React.FC<AddFAQComponentProps> = (props) => {
  const [question, setQuestion] = useState<Question>();
  const [answer, setAnswer] = useState<Answer>();

  const submitFAQ = (question:string, answer:string) =>{
    console.log("submitting FAQ")
    console.log("with question" + question)
    console.log("with answer" + answer)
  }

  return (
    <form id="addFAQForm" onSubmit={() =>submitFAQ}>
      <label>Question:</label>
      <input type="text" id="questionInput" />
      <label>Answer:</label>
      <input type="text" id="answerInput" />
      <button type="submit" id="submitFAQButton"/>
    </form>
  );
};
