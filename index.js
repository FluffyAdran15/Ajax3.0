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
