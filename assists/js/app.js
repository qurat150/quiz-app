var quizData = [{
    question: "How Old is Qurat",
    options: ["17", "20", "15", "110"],
    correct: "17"
}, {
    question: "What does HTML stands For?",
    options: ["Hyperlink Makeup Language", "HyperText Markup Language", "Cascading Style Sheet", "HyperMake Making Language"],
    correct: "HyperText Markup Language"
}, {
    question: `What is the best Programming Language learn in "2022"`,
    options: ["C++", "Python", "JavaScript", "Java"],
    correct: "JavaScript"
}, {
    question: "Who is the best girl in the World",
    options: ["Fiza", "Rubab", "Nazish", "Qurat ul Ain"],
    correct: "Qurat ul Ain"
}]
var i = 0;
var x = 0;
function loadQuestions() {
    document.getElementById("question").innerHTML = quizData[i].question;
    var answers = document.getElementsByClassName("answers")
    answers[0].innerHTML = quizData[i].options[0];
    answers[1].innerHTML = quizData[i].options[1];
    answers[2].innerHTML = quizData[i].options[2];
    answers[3].innerHTML = quizData[i].options[3];
    i++
}
document.getElementsByClassName("answers")
function checkAnswer() {
    var checkedId = document.querySelector("input[type=radio]:checked").id
    var answer = document.querySelector(`label[for="${checkedId}"]`).innerHTML
    if (answer == quizData[x++].correct) {
        alert("Correct !")
    } else {
        alert("Wrong! ")
    }
}
