const students = [];

students[0]='tom';
students[1]="dvd";
students.push("th");

students.unshift("jan");
students.splice (3,1,"Mary");
students.splice(2,2,"Lukas");

const removed=students.splice(1,1);
const last= students.pop(2);
console.log(students);
console.log(last);

// Constant error:
// const my_object=["abc"];
// students = ["abc"];

if(students.length<4){
    console.log("we need more")
}
console.log("last element of the array is ", students[ students.length-1 ])

