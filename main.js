class Questions {
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
    if (typeof myQuestion != typeof "string" || !myQuestion instanceof String)
      return (this.Question = "Question must be string value type !"); //Make sure given value is string
    if (myQuestion.length > this.maxCharUse)
      return (this.Question = `For question only allowed ${this.maxCharUse} char!`); //Make sure value length is under maxCharUse
    this.Question = myQuestion;
  }
  setAnswerOne(myAnswerOne) {
    if (myAnswerOne == "")
      return (this.answerOne = "First answer can't be empty!"); //Make sure given value is not empty
    if (typeof myAnswerOne != "string" || !myAnswerOne instanceof String)
      return (this.answerOne = "First answer must be string value type !"); //Make sure given value is string
    if (myAnswerOne.length > this.maxCharUse)
      return (this.answerOne = `For first answer only allowed ${this.maxCharUse} char!`); //Make sure value length is under maxCharUse
    this.answerOne = myAnswerOne;
  }
  setAnswerTwo(myAnswerTwo) {
    if (myAnswerTwo == "")
      return (this.answerTwo = "Second answer can't be empty!"); //Make sure given value is not empty
    if (typeof myAnswerTwo != "string" || !myAnswerTwo instanceof String)
      return (this.answerTwo = "Second answer must be string value type !"); //Make sure given value is string
    if (myAnswerTwo.length > this.maxCharUse)
      return (this.answerTwo = `For second answer only allowed ${this.maxCharUse} char!`); //Make sure value length is under maxCharUse
    this.answerTwo = myAnswerTwo;
  }
  showParams(x = 0) {
    if (x == 0) return; //invalid call value
    if (x == 1) return this.Question; //Take Question
    if (x == 2) return this.answerOne; //Take AnswerOne
    if (x == 3) return this.answerTwo; //Take AnswerTwo
  }
}

let questionList = [
  {
    Question: "Question 1",
    AnswerOne: "AnswerOne 1",
    AnswerTwo: "AnswerTwo 1",
  },
  {
    Question: "Question 2",
    AnswerOne: "AnswerOne 2",
    AnswerTwo: "AnswerTwo 2",
  },
  {
    Question: "Question 3",
    AnswerOne: "AnswerOne 3",
    AnswerTwo: "AnswerTwo 3",
  },
];

function fillQuestionArrayFromObject(inputArray) {
  let tempArray = [];
  let tempQuestion = "";
  let tempAnswerOne = "";
  let tempAnswerTwo = "";
  inputArray.forEach((element) => {
    if (element.Question == undefined) tempArray.push("");
    else {
      tempQuestion = element.Question;
      tempArray.push(tempQuestion);
    }
    if (element.AnswerOne == undefined) tempArray.push("");
    else {
      tempAnswerOne = element.AnswerOne;
      tempArray.push(tempAnswerOne);
    }
    if (element.AnswerTwo == undefined) tempArray.push("");
    else {
      tempAnswerTwo = element.AnswerTwo;
      tempArray.push(tempAnswerTwo);
    }
  });
  return tempArray;
}

function fillSingle(Question, AnswerOne, AnswerTwo) {
  let tempArray = [];
  const myQuestion = new Questions(Question, AnswerOne, AnswerTwo);
  tempArray.push(
    myQuestion.showParams(1),
    myQuestion.showParams(2),
    myQuestion.showParams(3)
  );
  return tempArray;
}

function filteredArrayFromClass(inputArray) {
  let tempArray = [];
  for (let i = 0; i < inputArray.length; ) {
    tempArray.push(
      fillSingle(inputArray[i], inputArray[i + 1], inputArray[i + 2])
    );
    i += 3;
  }
  return tempArray;
}

function optionFirst() {
  console.log("option 1");
}
function optionSecond() {
  let questionArray = fillQuestionArrayFromObject(questionList);
  let QuestionsArrays = filteredArrayFromClass(questionArray);
  console.log(questionArray);
  console.log(QuestionsArrays);
}
