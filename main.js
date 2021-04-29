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
let currentPage = "0";
let finishedCounter = 0;
let questionsLength = 0;
let questionList = [
  {
    Question:
      "Which of the following correctly describe JavaScript as a langauge?",
    AnswerOne: "It is based on object creation",
    AnswerTwo: "It emphasis on SCRIPTING",
  },
  {
    Question: "Which of the following correctly describe cookies?",
    AnswerOne: "Often referred to as `persistent HTML`",
    AnswerTwo: "Small piece of data stored on the user's computer",
  },
  {
    Question:
      "You plan the coding of your project.When must the object references be ready?",
    AnswerOne: "At debug time",
    AnswerTwo: "At run time",
  },
  {
    Question:
      "Which of the following languages will you consider as being similar to JavaScript",
    AnswerOne: "Pascal",
    AnswerTwo: "C",
  },
  {
    Question:
      "What are JavaScript relations with the underlying operation platform?",
    AnswerOne: "Platform binding",
    AnswerTwo: "Platform independent",
  },
  {
    Question: "A program written by JavaScript is driven by",
    AnswerOne: "Object",
    AnswerTwo: "Events",
  },
  {
    Question:
      "Under which of the following conditions will you need to include semi colons of a line of code?",
    AnswerOne: "When you have single statement on multiple lines",
    AnswerTwo: "When you have multiple statements on a line",
  },
  {
    Question:
      "When you plan for the JavaScript variable names,the first character must be?",
    AnswerOne: "CamelCase style",
    AnswerTwo: "Snake style",
  },
  {
    Question: "Which of the following are the valid JavaScript versions?",
    AnswerOne: "ECMAScript 1-6 supported in all modern browsers",
    AnswerTwo: "Only ES6",
  },
  {
    Question:
      "When authoring web page with JavaScript,why should you explicitly include the window object into your codes?",
    AnswerOne: "This ensures OS compatibility",
    AnswerTwo: "This is a good practice",
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
  questionsLength = tempArray.length;
  return tempArray; //returning pushed array
}

function optionFirst() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: "Try again later...",
  });
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
  if (
    document.getElementById(`${currentPage}question`).style.background !=
    "green"
  )
    document.getElementById(`${currentPage}question`).style.background = "grey";
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

  currentPage = questionID.charAt(0);
  document.getElementById("outputQuestionNumber").innerHTML = `Question ${
    parseInt(currentPage) + 1
  }`;
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
  if (firstButtonClicked == 1 || secondButtonClicked == 1) clicked = true;
}
function sumbit() {
  let pageID = currentPage;
  pageID = pageID.charAt(0);
  if (firstButtonClicked == 1 && secondButtonClicked == 1) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You can choose only 1 option",
    });
    document.getElementById(`firstSquare`).style.background = "transparent";
    document.getElementById(`secondSquare`).style.background = "transparent";
    firstButtonClicked = 0;
    secondButtonClicked = 0;
  }
  if (firstButtonClicked == 1 && secondButtonClicked == 0) {
    Swal.fire({
      icon: "success",
      title: "Correct...",
      text: `Questions left - ${questionsLength - finishedCounter - 1}`,
    });
    finishedCounter++;
    document.getElementById(`${pageID}question`).style.background = "green";
    next();
    firstButtonClicked = 0;
    secondButtonClicked = 0;
  }

  if (firstButtonClicked == 0 && secondButtonClicked == 1) {
    Swal.fire({
      icon: "success",
      title: "Correct...",
      text: `Questions left - ${questionsLength - finishedCounter - 1}`,
    });
    finishedCounter++;
    next();
    document.getElementById(`${pageID}question`).style.background = "green";
    firstButtonClicked = 0;
    secondButtonClicked = 0;
  }
  if (questionsLength == finishedCounter) {
    Swal.fire({
      title: `You answered correctly ${questionsLength} question`,
      imageUrl:
        "https://blog.commlabindia.com/wp-content/uploads/2019/07/animated-gifs-corporate-training.gif",
      imageHeight: 330,
      imageAlt: "Winner",
    });
  }
}
function finish() {
  if (finishedCounter < questionsLength) {
    Swal.fire({
      icon: "warning",
      title: "You must answer all question!",
      text: `${questionsLength - finishedCounter} questions left ...`,
    });
  } else {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      progressSteps: ["0", "1", "2", "3"],
    })
      .queue([
        {
          title: "You want more questions ?",
          text: "lets start | P.S type YES",
        },
        {
          title: "Question 1",
          text: "What are arrow functions?",
        },
        {
          title: "Question 2",
          text: "What is Object Destructuring?",
        },
        {
          title: "Question 3",
          text: "What is a Temporal Dead Zone?",
        },
      ])
      .then((result) => {
        if (result.value) {
          Swal.fire({
            title: "All done!",
            imageUrl:
              "https://media0.giphy.com/media/3bzAJKJNjUGT04c2dH/giphy.gif",
            imageHeight: 480,
            imageAlt: "Suprise",
            confirmButtonText: "Lovely!",
          });
        }
      });
  }
}
function back() {
  if (currentPage == 0) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Can't go back...",
    });
  } else {
    //document.getElementById(`${currentPage}question`).style.background = "grey";
    displayQuestion(`${currentPage - 1}`);
  }
}
function next() {
  if (currentPage == questionsLength - 1) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Can't go forward...",
    });
  } else {
    //document.getElementById(`${currentPage}question`).style.background = "grey";
    displayQuestion(`${1 + currentPage++}`);
  }
}
function reload() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success m-2",
      cancelButton: "btn btn-danger m-2",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure reload answers?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, reload",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        firstButtonClicked = 0;
        secondButtonClicked = 0;
        clicked = false;
        currentPage = "0";
        finishedCounter = 0;
        for (let i = 0; i < questionsLength; i++) {
          document.getElementById(`${i}question`).style.background =
            "transparent";
        }
        document.getElementById(`firstSquare`).style.background = "transparent";
        document.getElementById(`secondSquare`).style.background =
          "transparent";
        displayQuestion(`${0}`);
      } else {
        Swal.fire({
          icon: "info",
          title: "Almost...",
          text: "Becarefull next time...",
        });
      }
    });
}
function show() {
  const ipAPI = "//api.ipify.org?format=json";
  Swal.queue([
    {
      title: "Your public IP",
      confirmButtonText: "Show my public IP",
      text: "Your public IP will be received " + "via AJAX request",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(ipAPI)
          .then((response) => response.json())
          .then((data) => Swal.insertQueueStep(data.ip))
          .catch(() => {
            Swal.insertQueueStep({
              icon: "error",
              title: "Unable to get your public IP",
            });
          });
      },
    },
  ]);
}

/* */
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 300;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;
startTimer();
function onTimesUp() {
  clearInterval(timerInterval);
}
function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);
    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}
function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
/* */
