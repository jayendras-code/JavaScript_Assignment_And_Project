let marksObtained = Number(prompt("Enter total obtained marks form 500 : "));

let Score = marksObtained*100/500;
console.log("Score:" ,Score);


switch (true) {
    case (Score >= 90 && Score <= 100):
        console.log("Grade : A");
        break;

    case (Score >= 80 && Score < 90):
        console.log("Grade : B");
        break;

    case (Score >= 70 && Score < 80):
        console.log("Grade : C");
        break;

    case (Score >= 60 && Score < 70):
        console.log("Grade : D");
        break;

    case (Score >= 50 && Score < 60):
        console.log("Grade : E");
        break;

    case (Score >= 40 && Score < 50):
        console.log("Grade : F");
        break;
    case (Score >= 0 && Score < 40):
        console.log("Fail");
        break;

    default:
        console.log("Invalid Score");
}

let Status = Score>40?"Passed":"Failed"

console.log("Status: ",Status);

