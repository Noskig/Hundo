//get the values from the Page
//start or controller function 
function getValues(){
    //get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Validate input
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);


    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generatNumbers
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    }else{
        alert("You must enter numbers");
    }
    
    
    //we call displayNumbers
}

//generate numbers form startValue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue){

    let numbers = [];

    for (let i = sValue; i <= eValue; i++){
        numbers.push(i);
    }
    return numbers;
}

//Display the numbers and mark the even BOLD
//display or view functions
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";

        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className="odd";
        }


        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;



}