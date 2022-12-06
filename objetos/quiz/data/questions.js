import { Question } from "../models/Question.js";
import { data } from "./data.js";
                                  //este quesion es como un x de foreach
export const newQuestions=data.map(question => new Question(question.question, question.choices, question.answer))
