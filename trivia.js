////////////////Use Dom to select get and post button/////////////
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


///////create callback function thats used when button clicked////////
const getData = () =>{
    quest.style.display = 'block';
    pest.style.display = 'block';
    var answer = document.getElementsByClassName('wild').value;
    console.log(answer);
    var tops = "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";
    sendHttprequest('GET', tops);
};
////////// Create callback function with embeded promise/////////////
const sendHttprequest = (method,url) =>{
    const promise = new Promise((resolve, reject) =>{
        console.log(url);
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
///////////// When browser load parse http req to usable format//////////
            const data = JSON.parse(xhr.response);
            console.log(data);
            //displaying the data
            document.querySelector('#question').innerHTML = "Question: " + data.results[0].question
       document.querySelector('#answer1').innerHTML = "A: " + data.results[0].correct_answer;
       document.querySelector('#answer2').innerHTML = "B: " + data.results[0].incorrect_answers[0];
       document.querySelector('#answer3').innerHTML = "C: " + data.results[0].incorrect_answers[1];
        document.querySelector('#answer4').innerHTML = "D: " + data.results[0].incorrect_answers[2];
 
 
}
    xhr.send();
    })
}

/// add event listener to get button ///
let correctButton  = document.querySelector('#answer1');
let WrongButton  = document.querySelector('#answer2');
let WrongButton1  = document.querySelector('#answer3');
let WrongButton2 = document.querySelector('#answer4');
let quest =  document.querySelector('#search');
let pest =  document.querySelector('#question');


//tells you got the write answer
correctButton.addEventListener("click", ()=>{
    alert("OMG! Thats Right , Get A new question")
    quest.style.display = 'none';
    pest.innerHTML = "question: ";
    
});
 // tells you if you got the answer wrong
WrongButton.addEventListener('click', ()=>{
    alert("OMG! Thats Wrong , Try Again")
});
WrongButton1.addEventListener('click', ()=>{
    alert("OMG! Thats Wrong , Try Again")
});
WrongButton2.addEventListener('click', ()=>{
    alert("OMG! Thats Wrong , Try Again")
});

//gets the question
getBtn.addEventListener('click', getData);






