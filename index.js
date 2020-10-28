////////////////Use Dom to select get and post button/////////////
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


///////create callback function thats used when button clicked////////
const getData = () =>{
    var answer = document.getElementById('inputValue').value;
    console.log(answer);
    var tops = "https://api.openweathermap.org/data/2.5/weather?q="+ inputValue.value +"&units=imperial&appid=2a91e6fcdaf1ab49b173432a04dc433a";
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
        document.getElementById('temp').value = data.main.temp + " Degrees";
        document.getElementById('feel').value = data.main.feels_like + " Feels like";
        document.getElementById('max').value = data.main.temp_max + " Temp Max";
        document.getElementById('min').value = data.main.temp_min + " Temp Min";
        document.getElementById('hum').value = data.main.humidity + " humidity";
 
 
}
    xhr.send();
    })
}

/// add event listener to get button ///
getBtn.addEventListener('click', getData);




////////////////Second api////
////////Use DOM Selection to select items we want to change with AJAX////////////
const starter3 = document.querySelector('.starter3');
const starter3image = document.querySelector('.starter3img');
const moves = document.querySelector('.moves');
const games = document.querySelector('.games');

////////Create our Request to server
let xhr = new XMLHttpRequest();

////////Set up a callback function to run when server req is successful///////////
xhr.onreadystatechange = () => {
///////Create an if statement that asks if the server req is complete/////////////
    if (xhr.readyState === 4)
///////now server is complete create an if to see if connection succcessful///////
    if (xhr.status === 200){
///////Body of the callback where we parse data and use DOM Manipulation//////////
    const data = JSON.parse(xhr.response);
    console.log(data);
  games.innerHTML = data['main']['temp'];
  moves.innerHTML = data.base;
///////Else if clause where we throw an error if we dont have success connecting//
    } else if (xhr.status === 404){
        alert("OH NO WE COULDN'T FIND THE PAGE YOU WERE LOOKING FOR");
    } else if (xhr.status === 500){
        alert('AWHH MAN THE SERVER IS TAKING A BREAK');
    }
};
///////open server request////////////////////////////////////////////////////////
xhr.open('GET', 'https://opentdb.com/api.php?amount=10&category=15&type=multiple');
///////send server request////////////////////////////////////////////////////////
xhr.send();




