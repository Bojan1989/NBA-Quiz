export class Question {
  question: string;
  answer: string;
  options: Options;

  constructor(obj?: any) {
    this.question = obj && obj.question || "";
    this.answer = obj && obj.answer || "";
    this.options = obj && obj.options || {};
  }
}

export class Options {
  option1: string;
  option2: string;
  option3: string;
  option4: string;

  constructor(obj?: any) {
    this.option1 = obj && obj.option1 || "";
    this.option2 = obj && obj.option2 || "";
    this.option3 = obj && obj.option3 || "";
    this.option4 = obj && obj.option4 || "";
  }
}
