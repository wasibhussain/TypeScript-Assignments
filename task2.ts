interface Student{
    name : string,
    percentage: number,
}
let myArray : Student[] = [
    {"name": "wasib", "percentage": 41},
    {"name": "kashif", "percentage": 61},
    {"name": "adnan", "percentage": 81},
    {"name": "hizbi", "percentage": 91},
    {"name": "mir", "percentage": 45},
    {"name": "noshad", "percentage": 32},
    {"name": "arsalan", "percentage": 9},
 ]; 
 for (let index = 0; index < myArray.length; index++) {
    let student = myArray[index];
   if(student.percentage > 80){
      console.log(student.name + " A+");
    }else if (student.percentage > 70){
       console.log(student.name+ " A"); 
    }else if(student.percentage > 60){
       console.log(student.name+ " B"); 
    }else if(student.percentage > 50){
        console.log(student.name+ " C");
    }else if(student.percentage > 40){
        console.log(student.name+ " D");
    }else if(student.percentage < 40){
        console.log(student.name+ " F");
    }else{
        console.log("No record found");
    }
    
 }
// console.log(myArray[0][1]);