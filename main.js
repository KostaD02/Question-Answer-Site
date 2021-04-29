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
let firstButtonClicked = 0;
let secondButtonClicked = 0;
let clicked = false;
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
  let tempArray = []; //creating temporary array
  let tempQuestion = ""; //creating temporary question string
  let tempAnswerOne = ""; //creating temporary answerone string
  let tempAnswerTwo = ""; //creating temporary asnwertwo string
  inputArray.forEach((element) => {
    if (element.Question == undefined) tempArray.push("");
    //checking question line if didnt catch pushing as empty string
    else {
      tempQuestion = element.Question;
      tempArray.push(tempQuestion); //pushing question
    }
    if (element.AnswerOne == undefined) tempArray.push("");
    //checking question line if didnt catch pushing as empty string
    else {
      tempAnswerOne = element.AnswerOne;
      tempArray.push(tempAnswerOne); //pushing answerone
    }
    if (element.AnswerTwo == undefined) tempArray.push("");
    //checking question line if didnt catch pushing as empty string
    else {
      tempAnswerTwo = element.AnswerTwo;
      tempArray.push(tempAnswerTwo); //pushing answertwo
    }
  });
  return tempArray; //returning pushed array
}

function fillSingle(Question, AnswerOne, AnswerTwo) {
  let tempArray = []; //creating temporary array
  const myQuestion = new Questions(Question, AnswerOne, AnswerTwo); //giving params to class
  tempArray.push(
    //pushing in temporary array question&answerone&answertwo which was filtered in class constructor&functions
    myQuestion.showParams(1),
    myQuestion.showParams(2),
    myQuestion.showParams(3)
  );
  return tempArray; //returning pushed array
}

function filteredArrayFromClass(inputArray) {
  let tempArray = []; //creating temporary array
  for (let i = 0; i < inputArray.length; ) {
    //using loop to push every question&answerone&answertwo
    tempArray.push(
      fillSingle(inputArray[i], inputArray[i + 1], inputArray[i + 2])
    );
    i += 3; //i must be increased 3 becouse index(question) = 0 , index(answerone) = 1 and  index(answertwo) = 2 so this is going like that ...
  }
  return tempArray; //returning pushed array
}

function optionFirst() {
  console.log("option 1");
}
function optionSecond(displayID, afterDisplayID, displayPlaceID, ulID) {
  let questionArray = fillQuestionArrayFromObject(questionList);
  let QuestionsArrays = filteredArrayFromClass(questionArray);
  document.getElementById(`${displayID}`).style.display = "none";
  document.getElementById(`${afterDisplayID}`).style.display = "inline-block";
  document.getElementById(`${displayPlaceID}`).style.display = "inline-block";
  createList(QuestionsArrays, ulID);
}

function createList(array, ulID) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    document.getElementById(`${ulID}`).innerHTML += `<li>Question ${
      i + 1
    }</li>`;
    //document.querySelector("li").id = `question${i}`;
    let id = `${i}question`;
    document.querySelector("ul").lastElementChild.id = `${id}`;
    document
      .getElementById(`${id}`)
      .setAttribute("onclick", `displayQuestion('${id}')`);
  }
}
function displayQuestion(questionID = "0", array = []) {
  if (clicked) {
    document.getElementById(`firstSquare`).style.background = "transparent";
    document.getElementById(`secondSquare`).style.background = "transparent";
  }
  let questionArray = fillQuestionArrayFromObject(questionList);
  let QuestionsArrays = filteredArrayFromClass(questionArray);
  array = QuestionsArrays;
  document.getElementById(`outputQuestion`).innerHTML =
    array[questionID.charAt(0)][0];
  document.getElementById(`outputAnswerOne`).innerHTML =
    array[questionID.charAt(0)][1];
  document.getElementById(`outputAnswerTwo`).innerHTML =
    array[questionID.charAt(0)][2];
}
function buttonClicked(clickedButton, buttonID) {
  if (clickedButton == "1") {
    firstButtonClicked++;
    document.getElementById(`${buttonID}`).style.background = "purple";
    if (firstButtonClicked == 2) {
      document.getElementById(`${buttonID}`).style.background = "transparent";
      firstButtonClicked = 0;
    }
  }
  if (clickedButton == "2") {
    secondButtonClicked++;
    document.getElementById(`${buttonID}`).style.background = "purple";
    if (secondButtonClicked == 2) {
      document.getElementById(`${buttonID}`).style.background = "transparent";
      secondButtonClicked = 0;
    }
  }
  if (firstButtonClicked == 1 || secondButtonClicked == 2) clicked = true;
}
