'use strict';

const advice = document.querySelector('p');
const adviceId = document.querySelector('span');
const dice = document.querySelector('.dice');

dice.addEventListener('click', () => {
    getAdvice()
})

function getAdvice() {
    fetch(' https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObj = adviceData.slip;
        console.log(adviceObj)
        advice.innerHTML = adviceObj.advice;
        adviceId.innerHTML = adviceObj.id;
    }).catch(error => {
        console.log('There is an error!')
    })
}