const inputMind = document.querySelector("input[name='clientMind']");
const askContainer = document.querySelector('.ask-container');
const processContainer = document.querySelector('.process-container');
const resultContainer = document.querySelector('.result-container');

const yesGuess = document.getElementById('yesGuess');
const noNvm = document.getElementById('noNvm');

const result = document.querySelector('.result-container input');  

const submitTheMind = document.getElementById('submitTheMind');
// Ask The Mind

submitTheMind.addEventListener('click', () => {
    result.value = inputMind.value;
    if (inputMind.value == "") {
        result.value = "i'm sorry but, your mind is blank. Are you OK?";
    }
    console.log(result.value);
    askContainer.style.transform = "scale(0)";
    processContainer.style.transform = "scale(1)";
});

// Procees
    yesGuess.addEventListener ('click', () => {
        processContainer.style.transform = "scale(0)";
        resultContainer.style.transform = "scale(1)";
    } );

// Result
    function backTo() {
        processContainer.style.transform = "scale(0)";
        resultContainer.style.transform = "scale(0)";
        askContainer.style.transform = "scale(1)";
        inputMind.value = "";
    }