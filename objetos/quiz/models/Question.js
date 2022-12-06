export class Question {
  /**
   *
   * @param {string} text texto de la pregunta
   * @param {string[]} choices opciones de la pregunta
   * @param {string} answer respuesta de la pregunta
   */

  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  
  /**
   *
   * @param {string} choice texto a adivinar
   * @returns {boolean} retorna true si es correcto
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}
