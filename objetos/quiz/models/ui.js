export class Ui{
    constructor(){}

    /**
     * 
     * @param {string} text pregunta a mostrar
     */
    showQuestion(text){
      const questionTitle= document.getElementById("question");
      questionTitle.innerText=text;
    }

    /**
     * 
     * @param {string[]} choices opciones respuestas
     */
    showChoices(choices,callback){
        const div= document.getElementById("choices");
        div.innerText="";

        for(let i=0;i<choices.length;i++){
            const boton=document.createElement("button");
            boton.innerText=choices[i];
            boton.className="button";
            boton.addEventListener("click",()=> callback(choices[i]))
            div.append(boton);
        }
    }

    /**
     * 
     * @param {number} score preguntas acertadas
     */
    showScore(score){
        const scores=`
        <h1>Resultado</h1>
        <h2>your Score: ${score}</h2>
        `
        const element=document.getElementById("quiz");
        element.innerHTML=scores;
    }

    /**
     * 
     * @param {number} currentIndex pregunta 
     * @param {number} total total preguntas
     */
    showProgress(currentIndex, total){
      const element=  document.getElementById("progress")
      element.innerText=`Question ${currentIndex} of ${total}`
    }
}
