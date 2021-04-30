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
let firstButtonClicked = 0; //counting first button click
let secondButtonClicked = 0; //counting second button click
let clicked = false; //checking was clicked or not
let currentPage = "0"; //displaying current page
let finishedCounter = 0; //counting finished page
let questionsLength = 0; //taking information about how many question do we have in array
let questionList = [
  //question array
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
  // {
  //   Question: "",
  //   Answers: ["", "", "", ""],
  //   currentState : 0,
  //    better version on next build will be like that
  // }
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
  //showing firstopton
  Swal.fire({
    //alert
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: "Try again later...",
  });
}
function optionSecond(displayID, afterDisplayID, displayPlaceID, ulID) {
  //this is second option
  let questionArray = fillQuestionArrayFromObject(questionList); //we are taking firstly elements from object
  let QuestionsArrays = filteredArrayFromClass(questionArray); //then we are giving to class and it takes constructor and some function which will check validation
  document.getElementById(`${displayID}`).style.display = "none"; //display none will clear visual of options
  document.getElementById(`${afterDisplayID}`).style.display = "inline-block"; //after that it will be visible
  document.getElementById(`${displayPlaceID}`).style.display = "inline-block"; //after that it will be visible
  createList(QuestionsArrays, ulID); //creating li elements dynamically
}

function createList(array, ulID) {
  //creating li elements dynamically
  let length = array.length; //first we are making value which will contain question length
  for (let i = 0; i < length; i++) {
    // then making loop to create as much li element as much we have
    document.getElementById(`${ulID}`).innerHTML += `<li>Question ${
      i + 1
    }</li>`;
    //document.querySelector("li").id = `question${i}`;
    let id = `${i}question`; // then making unique ID
    document.querySelector("ul").lastElementChild.id = `${id}`; //giving li element unique ID
    document
      .getElementById(`${id}`)
      .setAttribute("onclick", `displayQuestion('${id}')`); //giving every li element onclick event and pass function which will display question within unique ID
  }
}
function displayQuestion(questionID = "0", array = []) {
  //displaying question
  if (
    //checking li element background is green or not , if it's green that's mean it's already sumbit with answer
    document.getElementById(`${currentPage}question`).style.background !=
    "green"
  )
    document.getElementById(`${currentPage}question`).style.background = "grey"; //giving grey background color li element if there wasn't already green
  if (clicked) {
    //if there was clicked we must clear clicks
    document.getElementById(`firstSquare`).style.background = "transparent"; //making checkbox color transparent
    document.getElementById(`secondSquare`).style.background = "transparent"; //making checkbox color transparent
  }
  let questionArray = fillQuestionArrayFromObject(questionList); //we are taking firstly elements from object
  let QuestionsArrays = filteredArrayFromClass(questionArray); //then we are giving to class and it takes constructor and some function which will check validation
  array = QuestionsArrays; //giving optional params value
  //displaying question&answes on screen which was taken from array , in array firstly must reach index of question number , then reaching every element of that index
  document.getElementById(`outputQuestion`).innerHTML =
    array[questionID.charAt(0)][0];
  document.getElementById(`outputAnswerOne`).innerHTML =
    array[questionID.charAt(0)][1];
  document.getElementById(`outputAnswerTwo`).innerHTML =
    array[questionID.charAt(0)][2];
  currentPage = questionID.charAt(0); //giving current page value , to know after that wich page are we
  document.getElementById("outputQuestionNumber").innerHTML = `Question ${
    parseInt(currentPage) + 1
  }`; //displaying question number
}
function buttonClicked(clickedButton, buttonID) {
  //this fucntion will take care of button clicks
  if (clickedButton == "1") {
    // if your button was clicked
    firstButtonClicked++; // our counter will increase
    document.getElementById(`${buttonID}`).style.background = "purple"; //and change color purple
    if (firstButtonClicked == 2) {
      //if clicked second time
      document.getElementById(`${buttonID}`).style.background = "transparent"; //it will change color to transparent
      firstButtonClicked = 0; //giving back standart value
    }
  }
  if (clickedButton == "2") {
    //if your button was clicked
    secondButtonClicked++; //our counter will increase
    document.getElementById(`${buttonID}`).style.background = "purple"; //and change color purple
    if (secondButtonClicked == 2) {
      //if clicked second time
      document.getElementById(`${buttonID}`).style.background = "transparent"; //it will change color to transparent
      secondButtonClicked = 0; //giving back standart value
    }
  }
  if (firstButtonClicked == 1 || secondButtonClicked == 1) clicked = true; //if one of the option button was clicked , clicked value will set on true
}
function sumbit() {
  //this function will sumbit the answer
  let pageID = currentPage; //firstly taking current page value
  pageID = pageID.charAt(0); //from li element id we have string for example "0question" we must take just number , it will be current question id
  if (firstButtonClicked == 1 && secondButtonClicked == 1) {
    //checking if both checkbox was clicked or not
    Swal.fire({
      //giving alert of error
      icon: "error",
      title: "Oops...",
      text: "You can choose only 1 option",
    });
    document.getElementById(`firstSquare`).style.background = "transparent"; //giving back checkbox standart color
    document.getElementById(`secondSquare`).style.background = "transparent"; //giving back checkbox standart color
    firstButtonClicked = 0; //giving back counter standart value
    secondButtonClicked = 0; //giving back counter standart value
  }
  if (firstButtonClicked == 1 && secondButtonClicked == 0) {
    //if just first checkbox was choosen
    Swal.fire({
      //giving alert of succsess
      icon: "success",
      title: "Correct...",
      text: `Questions left - ${questionsLength - finishedCounter - 1}`,
    });
    finishedCounter++; //increase finished question
    document.getElementById(`${pageID}question`).style.background = "green"; //making li element background green to understand user that question was passed
    next(); //going to next question
    firstButtonClicked = 0; //giving back counter standart value
    secondButtonClicked = 0; //giving back counter standart value
  }

  if (firstButtonClicked == 0 && secondButtonClicked == 1) {
    //if just first checkbox was choosen
    Swal.fire({
      //giving alert of succsess
      icon: "success",
      title: "Correct...",
      text: `Questions left - ${questionsLength - finishedCounter - 1}`,
    });
    finishedCounter++; //increase finished question
    next(); //going to next question
    document.getElementById(`${pageID}question`).style.background = "green"; //making li element background green to understand user that question was passed
    firstButtonClicked = 0; //giving back counter standart value
    secondButtonClicked = 0; //giving back counter standart value
  }
  if (questionsLength == finishedCounter) {
    //if questions quantity was equal to finished questions thats mean user answered all question
    Swal.fire({
      //giving alert of finishing
      title: `You answered correctly ${questionsLength} question`,
      imageUrl:
        "https://blog.commlabindia.com/wp-content/uploads/2019/07/animated-gifs-corporate-training.gif",
      imageHeight: 330,
      imageAlt: "Winner",
    });
  }
}
function finish() {
  //this function will check is there any question left , if not it will display little extra questions
  if (finishedCounter < questionsLength) {
    Swal.fire({
      //giving alert about answering questions
      icon: "warning",
      title: "You must answer all question!",
      text: `${questionsLength - finishedCounter} questions left ...`,
    });
  } else {
    Swal.mixin({
      //giving alert about extra questions
      input: "text",
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      progressSteps: ["0", "1", "2", "3"], //ordering questions
    })
      .queue([
        //questions array
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
        //after answering all question displaying gif that finished every question
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
  //this function will display before question
  if (currentPage == 0) {
    //if currentpage is equal 0 that's mean it's first question and can't go more back
    Swal.fire({
      //giving warning alert
      icon: "warning",
      title: "Oops...",
      text: "Can't go back...",
    });
  } else {
    //document.getElementById(`${currentPage}question`).style.background = "grey";
    displayQuestion(`${currentPage - 1}`); //displaying back question
  }
}
function next() {
  //this function will display next question
  if (currentPage == questionsLength - 1) {
    //checking is this question last in array or not
    Swal.fire({
      //giving allert becouse it's last question in array and can't go more forward
      icon: "warning",
      title: "Oops...",
      text: "Can't go forward...",
    });
  } else {
    //document.getElementById(`${currentPage}question`).style.background = "grey";
    displayQuestion(`${1 + currentPage++}`); //moving forward
  }
}
function reload() {
  //realoading full page
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      //creating two button for user
      confirmButton: "btn btn-success m-2",
      cancelButton: "btn btn-danger m-2",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      //giving options
      title: "Are you sure reload answers?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, reload",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    })
    .then((result) => {
      //after option
      if (result.isConfirmed) {
        //if it's confirmed we are making global value standart
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
        //otherwise we just giving alert
        Swal.fire({
          icon: "info",
          title: "Almost...",
          text: "Becarefull next time...",
        });
      }
    });
}
function show() {
  //this function will show user their own IP
  const ipAPI = "//api.ipify.org?format=json"; //using ip API
  Swal.queue([
    //giving alert
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
