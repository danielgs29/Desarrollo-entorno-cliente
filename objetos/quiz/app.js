//@ts-check
import { newQuestions } from "./data/questions.js";
import { Quiz } from "./models/quiz.js";
import { Ui } from "./models/ui.js";

/**
 * 
 * @param {Quiz} quiz quiz object
 * @param {Ui} ui ui object
 */

const renderPage=(quiz,ui)=>{
    if(quiz.isEnded()){
        ui.showScore(quiz.score);
    }
    else{
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices,(currentChoice)=>
        {quiz.guess(currentChoice);
        renderPage(quiz,ui);
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
    }
  
}

function main(){
    const quiz=new Quiz(newQuestions);
    const ui=new Ui();

   renderPage(quiz,ui)
}

main();