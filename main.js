class myAnswerTwos {
  maxCharUse = 200;
  constructor(
    Question = "Question",
    answerOne = "AnswerOne",
    answerTwo = "AnswerTwo"
  ) {
    this.set(Question, answerOne, answerTwo);
  }
  set(myQuestion, myAnswerOne, myAnswerTwo) {
    this.setQuestion(myQuestion);
    this.setAnswerOne(myAnswerOne);
    this.setAnswerTwo(myAnswerTwo);
  }
  setQuestion(myQuestion) {
    if (myQuestion == "") return (this.Question = "Question can't be empty!"); //Make sure given value is not empty
    if (typeof myQuestion != "string" || !(myQuestion instanceof String))
      return (this.Question = "Question must be string value type !"); //Make sure given value is string
    if (myQuestion.length > this.maxCharUse)
      return (this.Question = `For question only allowed ${this.maxCharUse} char!`); //Make sure value length is under maxCharUse
  }
  setAnswerOne(myAnswerOne) {
    if (myAnswerOne == "")
      return (this.answerOne = "First answer can't be empty!"); //Make sure given value is not empty
    if (typeof myAnswerOne != "string" || !(myAnswerOne instanceof String))
      return (this.answerOne = "First answer must be string value type !"); //Make sure given value is string
    if (myAnswerOne.length > this.maxCharUse)
      return (this.answerOne = `For first answer only allowed ${this.maxCharUse} char!`); //Make sure value length is under maxCharUse
  }
  setAnswerTwo(myAnswerTwo) {
    if (myAnswerTwo == "")
      return (this.answerTwo = "Second answer can't be empty!"); //Make sure given value is not empty
    if (typeof myAnswerTwo != "string" || !(myAnswerTwo instanceof String))
      return (this.answerTwo = "Second answer must be string value type !"); //Make sure given value is string
    if (myAnswerTwo.length > this.maxCharUse)
      return (this.answerTwo = `For second answer only allowed ${this.maxCharUse} char!`); //Make sure value length is under maxCharUse
  }
  showParams(x = 0) {
    if (x == 0) return; //invalid call value
    if (x == 1) return this.Question; //Take Question
    if (x == 2) return this.answerOne; //Take AnswerOne
    if (x == 3) return this.answerTwo; //Take AnswerTwo
  }
}
