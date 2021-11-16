'use strict';

// alert("Make sure to read the instructions before proceeding");

function showhideInstruction() {
    document.getElementById('instructions').classList.toggle('closeInstructions');
    document.getElementById('overlay').classList.toggle('hidden');
}

document.getElementById('info').addEventListener('click', showhideInstruction);
document.getElementById('overlay').addEventListener('click', showhideInstruction);

function readSelectValue() {
    const selectValue = document.getElementById('selectTopic').value;
    if(selectValue=='select') {
        document.getElementById('startGame').disabled = true;
        document.getElementById('startGame').style.cursor = 'not-allowed';
    } else {
        document.getElementById('startGame').disabled = false;
        document.getElementById('startGame').style.cursor = 'pointer';
    }
}

document.getElementById('selectTopic').addEventListener('change',readSelectValue);

// function startQuiz() {
//     const topic = document.getElementById('selectTopic').value;
//     let file;
//     if(topic == 'all') {
//         file = `https://api.trivia.willfry.co.uk/questions?limit=15`;
//     } else {
//         file = `https://api.trivia.willfry.co.uk/questions?categories=${topic}&limit=15`;
//     }
//     $.getJSON(file, function(data) {
//         console.log(data);
//         let i = 0;
//         for (const ele of data.entries()) {
//             localStorage.setItem(`que${ele[0]}`, JSON.stringify(ele[1]));
//             i++;
//         }
//         window.location.assign('/queTemplate');
//     });
// }

// document.getElementById('startGame').addEventListener('click', startQuiz);