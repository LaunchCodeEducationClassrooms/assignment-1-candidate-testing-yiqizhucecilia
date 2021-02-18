const input = require(`readline-sync`);
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName='';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer="hello";

let questions=["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers.","(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"]
let correctAnswers=["Sally Ride", "true", "40","Trajectory","3"]
var candidateAnswers=new Array(5);

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName=input.question("what is your name? ")
console.log("Candidate Name: "+ candidateName)
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i=0; i<5; i++){
  candidateAnswers[i]=input.question(questions[i])
  console.log("Your Answer: "+ candidateAnswers[i])
  console.log("Correct Answer: "+ correctAnswers[i])
  //console.log(candidateAnswers)
  }
}

function gradeQuiz(candidateAnswers) {
  let count=0
  for (i=0; i<5; i++){
      if (candidateAnswers[i].toLowerCase()==correctAnswers[i].toLowerCase()){
      count=count+1}    
    }// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let grade=(count/correctAnswers.length)*100;
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  
  grade=gradeQuiz(this.candidateAnswers)
  count=gradeQuiz(this.candidateAnswer).count
  console.log(">>> Overall Grade:" +grade+ "% (" + count +" of " +correctAnswers.length + " responses correct) <<<" )

  if (grade<80){console.log(">>> Status: FAILED <<<")}else(console.log(">>> Status: PASSED <<<"))
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //


module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
