//Question 1
// Create a function called `printSeason` that accepts one argument (has one parameter) called `season`.

// Inside the function log the value of the argument.

// Call the function and pass in the value "summer` as the argument.

function printSeason (season){
    console.log(season);
}
printSeason("summer");


// question 2
// Create a function called `printNumbers` that has two parameters, `firstNumber` and `secondNumber`.

// Inside the function log each value that is passed in.

// Call the function and pass in two numbers as the arguments.

function printNumbers (firstNumber, secondNumber){
    console.log(firstNumber);
    console.log(secondNumber);
}
printNumbers(5, 10);

//Question 3

// Create a function called `addNumbers` that has three parameters.

// Inside the function add all the paramters and return the result.

// Assign the result to a variable and assign the variable to the innerHTML property of the DOM element with the class of `total`.

const total = document.querySelector (".total")

function addNumbers (number1, number2, number3){
     let sum = number1 + number2 + number3; 
    
    const addedSums = "<p>" + sum + "</p>";

    total.innerHTML = "<div>" + `${addedSums}` + "</div>";

    return sum
}
addNumbers(1, 1, 1)

//Question 4
// Create a function called `createGreeting` that has one parameter.

// Inside the function add the value passed in to the string "Hello, my name is " and return the new string.

// Assign the returned value to the innerHTML property of the DOM element with the id of `name`.

const name = document.querySelector("#name")

function createGreeting(greeting){
    const greetingSum = "Hello, my name is " + greeting; 

    name.innerHTML = "<div>" + `${greetingSum}` + "</div>";

    return greetingSum
}

createGreeting("Linus!");


//question 5 
// Create a function called `printListItems` that has one parameter.

// Inside the function loop through the value passed in and log each item.

// Call the function and pass the `sports` array in `script.js` in as the argument.
const sports = ["golf", "football", "cricket"];

function printListItems(listItems){
    for (let i = 0; i < listItems.length; i++){
        console.log(listItems[i])
    }
}
printListItems(sports)



// question 6
// Create a function called `createGames` that has one parameter.

// Inside the function loop through the value passed in, create HTML for each property in each object and return the HTML.

// Provide a default value for the `released` property if it is missing.

// Assign the return value of the function to the innerHTML property of the DOM element with the class of `game-container`.
const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];


let html = "";



function createGames (listOfGames){


    
    for (let i = 0; i < listOfGames.length; i++){
        console.log(listOfGames[i])
        let releaseYear = "Unknown Year"

        if (listOfGames[i].released){
            releaseYear = listOfGames[i].released;
        }

        html += `<div class="game">
        <h5>${listOfGames.name}</h5>
        <p>${listOfGames.releaseYear}</p>
        </div>`;
    }

    return html;
}


const newHTML = createGames(games)

const gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = newHTML;
createGames(games)
