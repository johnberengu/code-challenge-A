// function to calculate grade of a student
const marks = prompt('Enter a student mark (0-100):');

studentMarks=(mark)=>{
    if (mark > 79 && mark <= 100){
        return 'A'
    }
    else if (mark >= 60 && mark <= 79){
        return 'B'
    }
    else if (mark >=49  && mark <= 59){
        return 'C'
    }
    else if (mark >= 40 && mark <= 49){
        return 'D'
    }
    else if (mark < 40 && mark >= 0){
        return 'E'
    }
    // if the range is not within the range 0-100 
    else {
        return 'invalid score'
    }
}
// check if the input is valid
const numericMarks = Number(marks);
console.log(studentMarks(numericMarks));


