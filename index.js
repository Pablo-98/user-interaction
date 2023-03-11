var name = prompt("what is your name?"); // loads a prompt for user. whatever the user enters is stored in the variable 'name'
var age = prompt("what is your age?"); 

const divOne = document.querySelector(".div-1");
const divTwo = document.querySelector(".div-2");



console.log(`users name: ${name} `); // prints the statement to the console. Make note of the use of backticks here. We only use these when we have objects (the object here is 'name') in our statements
console.log(`users age: ${age}`) 
console.log("hello world ${age} "); 

// To understand the concept of event listeners and callback functions we need repetition. Notice the below code is similar to our monkey project.

divOne.addEventListener('click', () => {
    divOne.classList.remove('active');
    divTwo.classList.add('active');
})

divTwo.addEventListener('click', () =>{
    divTwo.classList.remove('active');
    divOne.classList.add('active');
})




