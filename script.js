var theMind;
var inputMind = document.querySelector("input[name='clientMind']");

const askContainer = document.querySelector('.ask-container');
const processContainer = document.querySelector('.process-container');
const resultContainer = document.querySelector('.result-container');

const yesGuess = document.getElementById('yesGuess');
const noNvm = document.getElementById('noNvm');

const result = document.querySelector('.result-container p');  

// Ask The Mind
function claimTheMind() {
    theMind = inputMind.value;
    console.log(theMind);
    askContainer.style.display = "none";
    processContainer.style.display = "flex";
};

// Procees
    yesGuess.addEventListener ('click', () => {
        processContainer.style.display = "none";
        resultContainer.style.transform = "scale(1)";
    } );
    noNvm.addEventListener ('click', () => {
        processContainer.style.display = "none";
        askContainer.style.display = "flex";
    } );

// Result
    result.innerHTML = theMind;
    alert(theMind); 
